import { z } from 'zod';

export const VolunteerSchema = z.object({
  id: z.number().int(),
  created_at: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  trip_name: z.string(),
  date_of_trip: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  meetpoint_address: z.string(),
  duration_hours: z.number().int(),
  number_of_people: z.number().int(),
  vehicle_type: z.string(),
  additional_details: z.string().optional(),
  phone_number: z.string().optional(),
  wallet_address: z.string().optional(),
  event_interests: z.string().optional(),
  demographics: z.object({
    age: z.number().int().optional(),
    gender: z.string().optional(),
    interests: z.array(z.string()).optional(),
  }).optional(),
});

export type Volunteer = z.infer<typeof VolunteerSchema>;