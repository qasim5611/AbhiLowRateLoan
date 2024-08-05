



import { NextRequest, NextResponse } from "next/server"; 
import { Connect } from "../../../../dbconfig/dbconfig";

import { UploadImage } from "../../../../lib/upload-images";
// import { FeatureTopSection } from "../../../../modals/FeatureTopModel";
import { TalkToUsModel } from "../../../../modals/TalkToUsModel";
import { RefinanceConsultModel } from "../../../../modals/RefinanceConsultModel";
import { BuyHomeConsultModel } from "../../../../modals/BuyHomeConsultModel";

export const GET = async(req: NextRequest)=>{ 
  await Connect();
  console.log("Get Route initiated");
 const TalkUsdata = await TalkToUsModel.find({});
 const RefinanceConsultData = await RefinanceConsultModel.find({});
 const BuyHomeConsultData = await BuyHomeConsultModel.find({});

 let data = {
  TalkUsdata,
  RefinanceConsultData,
  BuyHomeConsultData
}

//  console.log("data at server", data);
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


