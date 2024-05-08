import React, { Dispatch, SetStateAction } from "react";

const useValidateEmail = (
  email: string
): [string[], Dispatch<SetStateAction<string[]>>] => {
  const [errors, setErrors] = React.useState<string[]>([]);

  React.useEffect(() => {
    setErrors(validateEmail(email));
  }, [email]);

  return [errors, setErrors];
};

const validateEmail = (email: string): string[] => {
  let errors = [];
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (Boolean(email)) {
    if (emailRegex.test(email)) {
      errors = [];
    } else {
      errors.push("Invalid email address");
    }
  } else {
    errors.push("Email is required");
  }
  return errors;
};

export default useValidateEmail;
