import { z } from "zod";

const phoneSchema = z.string().regex(/^\d{10,15}$/, {
  message: "Некорректный телефон или почта",
});

// Схема для email
const emailSchema = z
  .string()
  .email({ message: "Некорректный телефон или почта" });

// Объединяем схемы - строка должна быть либо телефоном, либо email
const contactSchema = z.union([phoneSchema, emailSchema]);

export const formLoginSchema = z.object({
  name: z.string().min(2, { message: "Введите ваше имя" }),
  phoneOrEmail: contactSchema,
  description: z.string(),
});

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
