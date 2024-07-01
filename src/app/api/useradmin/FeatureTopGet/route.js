// import { NextResponse } from "next/server";
// import { FeatureTopModel } from "../../../../modals/FeatureTopModel";

// export async function GET(req) {
//   const { id } = req.query;

//   try {
//     const featureTop = await FeatureTopModel.findById(id);
//     if (!featureTop) {
//       return NextResponse.json(
//         { error: "Document not found" },
//         { status: 404 }
//       );
//     }

//     const images = featureTop.cashBackImage.map((image) => ({
//       name: image.name,
//       data: image.data.toString("base64"), // Convert binary data to base64
//       contentType: image.contentType,
//     }));

//     return NextResponse.json({
//       cashBack: featureTop.cashBack,
//       images,
//     });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
