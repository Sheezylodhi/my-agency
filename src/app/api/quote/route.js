import connectDB from "@/lib/mongodb";
import Quote from "@/lib/models/Quote";
import cloudinary from "@/lib/cloudinary";
import { sendQuoteEmail } from "@/lib/quoteemail";

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const service = formData.get("service");
    const budget = formData.get("budget");
    const timeline = formData.get("timeline");
    const message = formData.get("message");

    // ✅ MULTIPLE FILES GET
    const files = formData.getAll("files");

    let fileUrls = [];

    // ✅ LOOP ALL FILES (Logic exactly like Submit Route)
    for (const file of files) {
      if (file && file.name) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // ✅ Upload logic same as Submit Route
        const uploadRes = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            {
              resource_type: "auto", // PDF/Docs/Images sab ke liye
              folder: "quotes",
              public_id: file.name, // Full name with extension
              use_filename: true,
              unique_filename: false, 
              overwrite: true
            },
            (err, result) => {
              if (err) reject(err);
              else resolve(result);
            }
          ).end(buffer);
        });

        fileUrls.push({
          url: uploadRes.secure_url,
          name: file.name, // Original full name
        });
      }
    }

    // ✅ SAVE DB
    const quote = await Quote.create({
      name,
      email,
      service,
      budget,
      timeline,
      message,
      fileUrls, // Array save hoga
    });

    // ✅ SEND EMAIL (Isme force download logic already add kar diya tha humne)
    await sendQuoteEmail({
      name,
      email,
      service,
      budget,
      timeline,
      message,
      fileUrls,
    });

    return Response.json({ success: true, quote });

  } catch (error) {
    console.log("❌ ERROR:", error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}