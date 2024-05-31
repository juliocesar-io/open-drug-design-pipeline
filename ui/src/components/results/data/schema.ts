import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
})

export type Task = z.infer<typeof taskSchema>


export const spSchema = z.object({
  id: z.string(),
  prediction: z.string(),
  sec_sp_1: z.string(),
  sec_sp_2: z.string(),
  tat_sp_1: z.string(),
  tat_sp_2: z.string(),
  tat_sp_3: z.string(),
  cs_position: z.string()
})

export type Sp = z.infer<typeof spSchema>