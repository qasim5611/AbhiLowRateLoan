import { NextRequest, NextResponse } from "next/server"; 
import { UploadImage } from "../../../../lib/upload-images";
// import { FeatureTopSection } from "../../../../modals/FeatureTopModel";
import { FeatureContentModal } from "../../../../modals/FeaturedServiceModel";
import { Connect } from "../../../../dbconfig/dbconfig";


export const POST = async(req: NextRequest)=>{ 
  await Connect();
  const formData = await req.formData(); 
  console.log("formData", formData);

  // const image = formData.get("image") as unknown as File; 

  const tagline = formData.get("tagline") as unknown as File;
  const desc = formData.get("desc") as unknown as File; 

  // const idtoUpdate = formData.get("idtoUpdate") as unknown as File; 

  console.log("tagline", tagline);
  console.log("desc", desc);

  // console.log("idtoUpdate", idtoUpdate);



//  const data:any =  await UploadImage(image, "nextjs-imagegallary");
//  console.log("image_url", data?.secure_url);
//  console.log("public_id", data?.public_id);

let data = await FeatureContentModal.create({
  tagline: tagline,
  desc: desc
 })



  return NextResponse.json(
    { msg: data },
    { 
      status: 200  ,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      }
    }
  )
}


