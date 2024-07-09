import { NextRequest, NextResponse } from "next/server"; 
import { Connect } from "../../../../dbconfig/dbconfig";

import { ImageGallaryModal } from "../../../../modals/FeatureTopModel";
export const GET = async(req: NextRequest)=>{ 
  await Connect();
  console.log("Get Route initiated");
 const Images = await ImageGallaryModal.find({});
//  console.log("Images at server", Images);
  return NextResponse.json(
    { images: Images },
    { 
      status: 200  
    }
  )
}


