import * as yup from "yup"

export const updateTodoSchema = yup.object({
    
    description: yup.string().required().max(100, "This property has 100 characters limit"),
    complete: yup.boolean().optional().default(false)
})