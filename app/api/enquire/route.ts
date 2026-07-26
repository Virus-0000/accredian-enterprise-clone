import { NextResponse } from "next/server";

export interface EnquireRequestBody {
  name: string;
  email: string;
  phone?: string;
  company: string;
  domainInterest?: string;
}

export async function POST(request: Request) {
  try {
    const body: EnquireRequestBody = await request.json();

    // Basic Validation
    if (!body.name || !body.email || !body.company) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: name, email, and company are required.",
        },
        { status: 400 }
      );
    }

    // Email format validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // Mock Database Persistence / Log
    console.log("[API /api/enquire] Received Lead Submission:", {
      timestamp: new Date().toISOString(),
      ...body,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully! Our enterprise team will contact you shortly.",
        data: {
          id: `ENQ-${Date.now()}`,
          name: body.name,
          company: body.company,
          submittedAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[API /api/enquire Error]:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
