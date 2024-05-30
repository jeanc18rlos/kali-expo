import * as yup from "yup";

const emailValidationSchema = (
  email_is_required: string,
  invalid_email: string
) =>
  yup.object({
    email: yup.string().required(email_is_required).email(invalid_email),
  });

export default emailValidationSchema;
