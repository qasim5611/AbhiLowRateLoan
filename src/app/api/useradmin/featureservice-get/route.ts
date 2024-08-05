



import { NextRequest, NextResponse } from "next/server"; 
import { Connect } from "../../../../dbconfig/dbconfig";

import { UploadImage } from "../../../../lib/upload-images";
// import { FeatureTopSection } from "../../../../modals/FeatureTopModel";
import { FeatureContentModal } from "../../../../modals/FeaturedServiceModel";
export const GET = async(req: NextRequest)=>{ 
  await Connect();
  console.log("Get Route initiated");
 const data = await FeatureContentModal.find({});
 console.log("data at server", data);
  return NextResponse.json(
    { data: data },
    { 
      status: 200  ,
    }
  )
}


