import { NextRequest, NextResponse } from "next/server"; 
import { ApplicationProcessModel } from "../../../../modals/ApplicationProcessModel";
import { Connect } from "../../../../dbconfig/dbconfig";

export const POST = async (req: NextRequest) => { 
  try {
    await Connect();
    const formData = await req.formData(); 
    console.log("formData application process", formData);

    // Delete all existing records
   let isDeleted = await ApplicationProcessModel.deleteMany({});
    console.log("Previous records deleted", isDeleted);
    console.log("Previous records deleted", isDeleted);

    if(isDeleted.acknowledged){
      console.log("Previous records deleted", isDeleted);
        // Iterate over formData entries
    const entries = [];
    formData.forEach((value, key) => {
      const match = key.match(/faqs\[(\d+)\]\[(\w+)\]/);
      if (match) {
        const index = match[1];
        const field = match[2];
        if (!entries[index]) {
          entries[index] = {};
        }
        entries[index][field] = value;
      }
    });

    // console.log("parsed entries", entries);

    // // Insert each entry into the database
    const results = [];
    for (const entry of entries) {
      if (entry.tagline && entry.desc) {
        const newRecord = await ApplicationProcessModel.create({
          tagline: entry.tagline,
          desc: entry.desc
        });
        results.push(newRecord);
      }
    }
    return NextResponse.json(
      { msg: "Records created successfully", results },
      { status: 200 }
    );
    }


    return NextResponse.json(
      { msg: "Records created Failed" },
      { status: 200 }
    );
  
  } catch (error) {
    console.error("Error processing records:", error);
    return NextResponse.json(
      { msg: "Failed to process records", error: error.message },
      { status: 500 }
    );
  }
};
