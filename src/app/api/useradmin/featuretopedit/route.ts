import { NextRequest, NextResponse } from "next/server"; 
import { UploadImage } from "./../../../../lib/upload-images";
// import { FeatureTopSection } from "../../../../modals/FeatureTopModel";
import { ImageGallaryModal } from "../../../../modals/FeatureTopModel";
export const GET = async(req: NextRequest)=>{ 
  console.log("Get Route initiated");
 const Images = await ImageGallaryModal.find({});
 console.log("Images at server", Images);
  return NextResponse.json(
    { images: Images, total: Images.length },
    { 
      status: 200  
    }
  )
}


