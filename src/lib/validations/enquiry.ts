import { z } from "zod";

export const enquirySchema = z.object({
  // Personal Details
  firstname: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters"),

  lastname: z
    .string()
    .trim()
    .optional()
    .nullable(),

  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .optional()
    .nullable(),

  // General Enquiry
  course: z
    .string()
    .trim()
    .optional()
    .nullable(),

  message: z
    .string()
    .trim()
    .optional()
    .nullable(),

  // Customized Training
  organization: z
    .string()
    .trim()
    .optional()
    .nullable(),

  industry: z
    .string()
    .trim()
    .optional()
    .nullable(),

  trainingRequirement: z
    .string()
    .trim()
    .optional()
    .nullable(),

  participants: z
    .coerce
    .number()
    .int()
    .positive("Number of participants must be greater than 0")
    .optional()
    .nullable(),

  trainingMode: z
    .enum(["ONLINE", "OFFLINE", "ON_SITE"])
    .optional()
    .nullable(),

  enquiryType: z
    .enum(["GENERAL", "CUSTOMIZED_TRAINING", "BROCHURE"])
    .default("GENERAL"),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;