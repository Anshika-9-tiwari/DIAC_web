import { prisma } from "@/lib/prisma";
import { enquirySchema } from "@/lib/validations/enquiry";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Zod validation
    const result = enquirySchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        {
          success: false,
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    // Validated & transformed data
    const data = result.data;

    // Save to database
    const enquiry_form = await prisma.enquiry_Form.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname || "",
        phone: data.phone,
        email: data.email || "",

        course: data.course || "",
        message: data.message || "",

        organization: data.organization || "",
        industry: data.industry || "",
        trainingRequirement: data.trainingRequirement || "",

        participants: data.participants ? Number(data.participants) : undefined,

        trainingMode: data.trainingMode || null,

        enquiryType: data.enquiryType,
      },
    });

    return Response.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        data: enquiry_form,
      },
      {
        status: 201,
      }
    );

  } catch (error) {
    console.error("Enquiry API Error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to submit enquiry.",
      },
      {
        status: 500,
      }
    );
  }
}