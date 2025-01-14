import {z} from 'zod'

export const WizardFormSchema = z.object({
    name: z.string().min(4).nonempty("Name is required"),
    userType: z.string().nonempty("User type is required"),
})