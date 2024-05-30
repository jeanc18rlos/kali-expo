import yup from "yup";

const MIN_ALLOWED_PASSWORD_LENGTH = 8;
const MAX_ALLOWED_PASSWORD_LENGTH = 50;

const passwordValidationSchema = (
  password_is_required: string,
  password_is_too_short: string,
  password_is_too_long: string,
  password_must_contain_number: string,
  password_must_contain_lowercase: string,
  password_must_contain_uppercase: string,
  password_must_contain_symbol: string
) =>
  yup.object({
    password: yup
      .string()
      .required(password_is_required)
      .min(MIN_ALLOWED_PASSWORD_LENGTH, password_is_too_short)
      .max(MAX_ALLOWED_PASSWORD_LENGTH, password_is_too_long)
      // One number
      .matches(/[0-9]/, password_must_contain_number)
      // One lowercase letter
      .matches(/[a-z]/, password_must_contain_lowercase)
      // One uppercase letter
      .matches(/[A-Z]/, password_must_contain_uppercase)
      // One special character
      .matches(/[^a-zA-Z0-9]/, password_must_contain_symbol),
  });

export default passwordValidationSchema;
