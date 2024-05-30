import React from "react";

const useValidateNameExists = (name: string): string[] => {
  const [errors, setErrors] = React.useState<string[]>([]);

  React.useEffect(() => {
    setErrors(validateName(name));
  }, [name]);

  return errors;
};

const validateName = (name: string) => {
  const trimmedPw = name.trim();

  const errors = [];

  if (trimmedPw) {
  } else {
    errors.push("Name cannot be empty");
  }

  if (parseInt(trimmedPw)) {
    errors.push("Name cannot be a number");
  }

  return errors;
};

export default useValidateNameExists;
