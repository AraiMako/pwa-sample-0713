import { z } from "zod";

export const RegisterTodoSchema = z
  .object({
    title: z.string().min(1),
  })
  .required({
    title: true,
  });

export type RegisterTodoInputType = z.infer<typeof RegisterTodoSchema>;
