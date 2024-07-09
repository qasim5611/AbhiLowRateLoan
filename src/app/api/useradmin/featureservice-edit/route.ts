import { NextRequest, NextResponse } from "next/server"; 
import { UploadImage } from "../../../../lib/upload-images";
import { DeleteImage } from "../../../../lib/upload-images";
import { FeatureContentModal } from "../../../../modals/FeaturedServiceModel";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  console.log("formData", formData);

  const desc = formData.get("desc") as string;
  const tagline = formData.get("tagline") as string;
  const idtoUpdate = formData.get("idtoUpdate") as string;

  console.log("desc", desc);
  console.log("tagline", tagline);
  console.log("idtoUpdate", idtoUpdate);

  // Fetch the existing record from the database
  let existingRecord = await FeatureContentModal.findById(idtoUpdate);

  // If the user did not edit the input elements, use the existing values
  const updatedDesc = desc || existingRecord.desc;
  const updatedTagline = tagline || existingRecord.tagline;

  const data = await FeatureContentModal.findByIdAndUpdate(
    idtoUpdate, // ID of the record you want to update
    {
      desc: updatedDesc,
      tagline: updatedTagline,
    },
    { new: true } // This option returns the updated document
  );

  return NextResponse.json(
    { msg: data },
    { 
      status: 200  
    }
  );
};
