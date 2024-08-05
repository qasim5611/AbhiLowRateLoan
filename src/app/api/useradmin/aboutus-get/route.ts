import { NextRequest, NextResponse } from "next/server"; 
import { Connect } from "../../../../dbconfig/dbconfig";

import { UploadImage } from "../../../../lib/upload-images";
// import { FeatureTopSection } from "../../../../modals/FeatureTopModel";
import { AboutusBannerModel } from "../../../../modals/AboutusBannerModel";
export const GET = async(req: NextRequest)=>{
 await Connect();
  // if(!dbConnect){
  //   let data = "MongoDb Not Connected"
  //   return NextResponse.json(
  //     { data: data },
  //     { 
  //       status: 200  
  //     }
  //   )
  // }
  console.log("Get Route initiated");
 const data = await AboutusBannerModel.find({});
 console.log("data at server", data);
  return NextResponse.json(
    { data: data },
    { 
      status: 200,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      }
    }
  )
}








