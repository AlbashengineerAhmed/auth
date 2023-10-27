import joi from 'joi'

export const signupSchema = joi.object({
  first_name:joi.string().alphanum().required().min(3).max(10),
  last_name:joi.string().alphanum().required().min(3).max(10),
  email:joi.string().email().required(),
  password:joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required(),
  cPassword:joi.string().valid(joi.ref('password')).required()
}).required()