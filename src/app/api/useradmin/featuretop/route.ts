import { NextRequest, NextResponse } from "next/server"; 
import { UploadImage } from "./../../../../lib/upload-images";
// import { FeatureTopSection } from "../../../../modals/FeatureTopModel";
import { ImageGallaryModal } from "../../../../modals/FeatureTopModel";




export const POST = async(req: NextRequest)=>{ 
  const formData = await req.formData(); 
  console.log("formData", formData);

  const image = formData.get("image1") as unknown as File; 

  const tagline = formData.get("tagline1") as unknown as File; 
  console.log("image", {image});
  console.log("tagline", tagline);

 const data:any =  await UploadImage(image, "nextjs-imagegallary");
 console.log("image_url", data?.secure_url);
 console.log("public_id", data?.public_id);

 await ImageGallaryModal.create({
  image_url: data?.secure_url,
  public_id: data?.public_id,
  tagline: tagline
 })



  return NextResponse.json(
    { msg: data },
    { 
      status: 200  
    }
  )
}


