import z from "zod";

export const loginSchema = z.object({
    email: z.email({ message: "Email milena" }).min(5, { message: "Email pugena" }),
    password: z.string().min(8, { message: "Password pugena" }),
});
export type LoginType = z.infer<typeof loginSchema>;
