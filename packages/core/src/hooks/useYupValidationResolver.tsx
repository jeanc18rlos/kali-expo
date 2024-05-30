import { useCallback } from "react";
import { Schema, ValidationError } from "yup";

export function useYupValidationResolver<T extends Schema>(
  validationSchema: T
) {
  return useCallback(
    async (data: Record<string, any>) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors: unknown) {
        if (errors instanceof ValidationError) {
          return {
            values: {},
            errors: errors.inner.reduce(
              (allErrors, currentError) => ({
                ...allErrors,
                [currentError.path!]: currentError.message,
              }),
              {}
            ),
          };
        } else {
          throw errors;
        }
      }
    },
    [validationSchema]
  );
}
