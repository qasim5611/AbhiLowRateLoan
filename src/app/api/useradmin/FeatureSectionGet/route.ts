import { Connect } from "../../../../dbconfig/dbconfig";
import {ImageGallaryModal} from "../../../../modals/FeatureTopModel";
// import refreshTokenModel from "./../../../../modals/refreshToken.Model";

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const GET = async(req: NextRequest)=>{ 
    const Images = await ImageGallaryModal.find({});
  return NextResponse.json(
    { 
      Images: Images,
      total: Images.length
    },
    { 
      status: 200  
    }
  )
}
