import React from "react";

const useValidatePassword = (
  password: string
): [string[], React.Dispatch<React.SetStateAction<string[]>>] => {
  const [errors, setErrors] = React.useState<string[]>([]);

  React.useEffect(() => {
    setErrors(validatePassword(password));
  }, [password]);

  return [errors, setErrors];
};

const validatePassword = (password: string) => {
  const trimmedPw = password.trim();

  const errors = [];

  const digitRegex = /\d/;
  const symbolRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;

  if (Boolean(trimmedPw)) {
    if (trimmedPw.length < 8)
      errors.push("Password should have at least 8 characters");
    if (trimmedPw.length > 20)
      errors.push("Password should not have more than 20 characters");
    if (!digitRegex.test(trimmedPw))
      errors.push("Password should have at least 1 number");
    if (!symbolRegex.test(trimmedPw))
      errors.push("Password should have at least 1 symbol");
    if (!uppercaseRegex.test(trimmedPw))
      errors.push("Password should have at least 1 Uppercase character");
    if (!lowercaseRegex.test(trimmedPw))
      errors.push("Password should have at least 1 Lowercase character");
  } else {
    errors.push("Password cannot be empty");
  }

  return errors;
};

export default useValidatePassword;
