import { NextRequest, NextResponse } from "next/server"; 
import { UploadImage } from "../../../../lib/upload-images";
// import { FeatureTopSection } from "../../../../modals/FeatureTopModel";
import { ImageGallaryModal } from "../../../../modals/FeatureTopModel";
import { Connect } from "../../../../dbconfig/dbconfig";

export const POST = async(req: NextRequest)=>{ 
  await Connect();
  const formData = await req.formData(); 
  console.log("formData", formData);

  const image = formData.get("image") as unknown as File; 

  const tagline = formData.get("tagline") as unknown as File; 
  const idtoUpdate = formData.get("idtoUpdate") as unknown as File; 

  console.log("image", {image});
  console.log("tagline", tagline);
  console.log("idtoUpdate", idtoUpdate);



//  const data:any =  await UploadImage(image, "nextjs-imagegallary");
//  console.log("image_url", data?.secure_url);
//  console.log("public_id", data?.public_id);

//  await ImageGallaryModal.create({
//   image_url: data?.secure_url,
//   public_id: data?.public_id,
//   tagline: tagline
//  })



  return NextResponse.json(
    // { msg: data },
    { 
      status: 200  
    }
  )
}


