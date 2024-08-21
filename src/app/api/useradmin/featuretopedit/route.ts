import { NextRequest, NextResponse } from "next/server"; 
import { UploadImage, DeleteImage } from "../../../../lib/upload-images";
import { ImageGallaryModal } from "../../../../modals/FeatureTopModel";
import { Connect } from "../../../../dbconfig/dbconfig";

export const POST = async (req: NextRequest) => { 
  try {
    await Connect();

    const formData = await req.formData(); 
    console.log("formData", formData);

    const imageData = formData.get("image") as File | string | null; 
    const tagline = formData.get("tagline") as string | null; 
    const page_link = formData.get("page_link") as string | null; 
    const idtoUpdate = formData.get("idtoUpdate") as string | null; 

    if (!idtoUpdate) {
      throw new Error("No ID provided for update.");
    }

    console.log("imageData", imageData);
    console.log("tagline", tagline);
    console.log("idtoUpdate", idtoUpdate);
    console.log("page_link", page_link);

    // Find the existing record in the database
    const mydata = await ImageGallaryModal.findOne({ _id: idtoUpdate });
    if (!mydata) {
      throw new Error("Record not found in the database.");
    }
    console.log("mydata", mydata);

    let updatedRecord;
    if (imageData && imageData instanceof File && imageData.size > 0) {
      try {
        console.log("mydata.public_id", mydata.public_id);

        const isDeleted: any = await DeleteImage(mydata.public_id);
        if (!isDeleted) {
          throw new Error("Failed to delete old image.");
        }
        console.log("isDeleted", isDeleted);

        updatedRecord = await UploadImage(imageData, "nextjs-imagegallary");
        if (!updatedRecord) {
          throw new Error("Failed to upload new image.");
        }
        console.log("image_url", updatedRecord?.secure_url);
        console.log("public_id", updatedRecord?.public_id);
      } catch (error) {
        throw new Error(`Image processing failed: ${error.message}`);
      }
    }

    // If the user did not edit the input elements, use the existing values
    const updatedTagline = tagline || mydata.tagline;
    const updatedPageLink = page_link || mydata.page_link;

    const data = await ImageGallaryModal.findByIdAndUpdate(
      idtoUpdate,
      {
        tagline: updatedTagline?.trim() || mydata.tagline,
        image_url: updatedRecord?.secure_url || mydata.image_url,
        public_id: updatedRecord?.public_id || mydata.public_id,
        page_link: updatedPageLink?.trim() || mydata.page_link,
      },
      { new: true }
    );

    if (!data) {
      throw new Error("Failed to update the record.");
    }
    
    console.log("datadatadata", data);
    return NextResponse.json({ msg: data }, { status: 200 });

  } catch (error) {
    console.error("Error occurred:", error.message);
    return NextResponse.json(
      { error: "Failed to process request", details: error.message },
      { status: 500 }
    );
  }
};
