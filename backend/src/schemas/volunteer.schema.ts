import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

const volunteerSchema = z.object({
  id: z.number().int().optional(), // Optional because it is auto-generated
  created_at: z.date().optional(), // Optional because it is auto-generated
  trip_name: z.string(),
  date_of_trip: z
  .union([z.date(), z.string().datetime()])
  .transform((val) => (typeof val === "string" ? new Date(val) : val)),
  meetpoint_address: z.string(),
  duration_hours: z.number().int(),
  number_of_people: z.number().int(),
  vehicle_type: z.string(),
  additional_details: z.string(),
  phone_number: z.string(),
  wallet_address: z.string(),
  event_interests: z.string(),
  demographics: z.any(), // JSON field, accepts any valid JSON
});

export const createVolunteerSchema = volunteerSchema;
export const updateVolunteerSchema = volunteerSchema.partial();

export const validateCreateVolunteer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await createVolunteerSchema.parseAsync(req.body);
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const validateUpdateVolunteer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await updateVolunteerSchema.parseAsync(req.body);
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};