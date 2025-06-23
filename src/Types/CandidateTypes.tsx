import { z } from "zod";

const CandidateSchema = z.object({
    name:z.string().min(1, "El nombbre debetener al menos un caracter"),
    age: z.number().int().min(18, "La edad debe ser al menos 18"),
    city: z.string(),
    country: z.string(),
    expirence : z.number().int().min(1, "Debe tener al menos un año de experiencia laboral"),
    skills: z.array(z.string()),
    working : z.boolean(),
    status: z.enum(["Pending", "Rewiewing", "Interviewing", "Hired", "Refused"]),
});

export type Candidatetype = z.infer<typeof CandidateSchema>;
