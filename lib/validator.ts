import { z } from "zod"
export const eventFormSchema = z.object({
    title:z.string().min(3,'Title must be at least 3 charecters'),
    description:z.string().min(3,'Description must be at least 3 charecters').max(400,'but it must be less than 400 char'),
    location : z.string().min(3,'Location must be at least').max(400,'but it must be less than 400 char'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()
    
  })