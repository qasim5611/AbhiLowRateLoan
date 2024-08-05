import { NextRequest, NextResponse } from "next/server"; 
import { UploadImage } from "../../../../lib/upload-images";
import { DeleteImage } from "../../../../lib/upload-images";
import { AboutusBannerModel } from "../../../../modals/AboutusBannerModel";

import { Connect } from "../../../../dbconfig/dbconfig";

export const POST = async(req: NextRequest)=>{ 
  await Connect();
  const formData = await req.formData(); 
  console.log("formData", formData);
  const image = formData.get("image") as unknown as File; 

  const idtoUpdate = formData.get("idtoUpdate") as unknown as File; 

  console.log("image", {image});
  console.log("idtoUpdate aboutus", idtoUpdate);


let mydata = await AboutusBannerModel.findOne({
  _id: idtoUpdate});

  console.log("mydata", mydata);
  console.log("mydata", mydata.public_id);

  
  const isDeleted:any =  await DeleteImage(mydata.public_id);
  console.log("isDeleted", isDeleted);


 const updatedRecord:any =  await UploadImage(image, "nextjs-imagegallary");
 console.log("image_url", updatedRecord?.secure_url);
 console.log("public_id", updatedRecord?.public_id);


 const data = await AboutusBannerModel.findByIdAndUpdate(
  idtoUpdate, // ID of the record you want to update
  {
    image_url: updatedRecord?.secure_url,
    public_id: updatedRecord?.public_id,
  },
  { new: true } // This option returns the updated document
);

  return NextResponse.json(
    { msg: data },
    { 
      status: 200 ,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      }
    }
  )
}


