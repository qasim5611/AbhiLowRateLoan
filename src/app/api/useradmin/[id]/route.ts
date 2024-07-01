// import { NextRequest, NextResponse } from "next/server"; 
// import { DeleteImage } from "../../../../lib/upload-images";
// // import { FeatureTopSection } from "../../../../modals/FeatureTopModel";
// import { ImageGallaryModal } from "../../../../modals/FeatureTopModel";


// export const DELETE = async(req: NextRequest, ctx:{params:{ id: string }})=>{ 
//  const result_delete =  await DeleteImage(ctx.params.id);

//  await ImageGallaryModal.findOneAndDelete({
//   public_id: ctx.params.id,
//  });


//   return NextResponse.json(
//  {msg : result_delete},
//     { 
//       status: 200  
//     }
//   )
// }


