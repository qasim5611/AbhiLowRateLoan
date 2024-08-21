import { NextRequest, NextResponse } from "next/server"; 
import { UploadImage, DeleteImage } from "../../../../lib/upload-images";
import { ImageGallaryModal } from "../../../../modals/FeatureTopModel";
import { Connect } from "../../../../dbconfig/dbconfig";

export const POST = async (req: NextRequest) => { 
  await Connect();
  
  const formData = await req.formData(); 
  console.log("formData", formData);

  const imageData = formData.get("image") as File | string | null; 
  const tagline = formData.get("tagline") as string | null; 
  const page_link = formData.get("page_link") as string | null; 
  const idtoUpdate = formData.get("idtoUpdate") as string | null; 

  console.log("imageData", imageData);
  console.log("tagline", tagline);
  console.log("idtoUpdate", idtoUpdate);
  console.log("page_link", page_link);

  // Check if imageData is null or its value is the string "null"
 
  // Find the existing record in the database
  const mydata = await ImageGallaryModal.findOne({ _id: idtoUpdate });
  console.log("mydata", mydata);


  // if (!imageData === null || imageData !== "null") {
  //   console.log("image is Present to updte new");
  // } 

  // If imageData is provided, delete the old image and upload the new one
  let updatedRecord;
  if (imageData && imageData instanceof File && imageData.size > 0) {
    console.log("mydata.public_id", mydata.public_id);

    const isDeleted: any = await DeleteImage(mydata.public_id);
    console.log("isDeleted", isDeleted);

    updatedRecord = await UploadImage(imageData, "nextjs-imagegallary");
    console.log("image_url", updatedRecord?.secure_url);
    console.log("public_id", updatedRecord?.public_id);
  }

  // If the user did not edit the input elements, use the existing values
  const updatedTagline = tagline || mydata.tagline;
  const updatedPageLink = page_link || mydata.page_link;

  const data = await ImageGallaryModal.findByIdAndUpdate(
    idtoUpdate, // ID of the record you want to update
    {
      image_url: updatedRecord?.secure_url || mydata.image_url,
      public_id: updatedRecord?.public_id || mydata.public_id,
      tagline: updatedTagline,
      page_link: updatedPageLink,
    },
    { new: true } // This option returns the updated document
  );

  return NextResponse.json(
    { msg: data },
    { 
      status: 200,
    }
  );
}
