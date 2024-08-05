import { NextRequest, NextResponse } from "next/server"; 
import { Connect } from "../../../../dbconfig/dbconfig";
import { FeatureMediaModel } from "../../../../modals/FeatureMediaModel";
export const GET = async(req: NextRequest)=>{ 
  await Connect();
  console.log("Get Route initiated");
 const Images = await FeatureMediaModel.find({});
//  console.log("Images at server", Images);
  return NextResponse.json(
    { images: Images, total: Images.length },
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


