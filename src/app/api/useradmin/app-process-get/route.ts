import { NextRequest, NextResponse } from "next/server"; 
import { Connect } from "../../../../dbconfig/dbconfig";
import { ApplicationProcessModel } from "../../../../modals/ApplicationProcessModel";
export const GET = async(req: NextRequest)=>{ 
  await Connect();
  console.log("Get Route initiated");
 const data = await ApplicationProcessModel.find({});
//  console.log("data at server", data);
//  console.log("data at server", data);

  return NextResponse.json(
    { data: data },
    { 
      status: 200  
    }
  )
}


