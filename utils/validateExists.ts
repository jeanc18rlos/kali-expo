import React from "react";

const useValidatePasswordExists = (
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

  if (Boolean(trimmedPw)) {
  } else {
    errors.push("Password cannot be empty");
  }

  return errors;
};

export default useValidatePasswordExists;
