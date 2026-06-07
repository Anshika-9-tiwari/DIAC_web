import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const enquiry_form = await prisma.enquiry_Form.create({
      data: {
        firstname: body.firstname,
        lastname: body.lastname,
        phone: body.phone,
        email: body.email,
        course: body.course,
        message: body.message,
      },
    });

    return Response.json({
      success: true,
      data: enquiry_form,
    });

  } catch (error) {
    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}