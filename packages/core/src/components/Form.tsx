import React, { createContext, useContext } from "react";
import {
  useForm,
  Controller as RHFController,
  UseFormReturn,
} from "react-hook-form";
import { useYupValidationResolver } from "../";
import { Schema } from "yup";
import { View } from "react-native";
import type { ReactNode } from "react";

type InputProps = {
  children: (formState: { field: any; fieldState: any }) => React.ReactElement;
  name: string;
};

type FormContextType =
  | (UseFormReturn & {
      onSubmit: (data: Record<string, any>) => void;
    })
  | null;

const FormContext = createContext<FormContextType>(null);

export const Controller: React.FC<InputProps> = ({ children, name }) => {
  const form = useContext(FormContext);
  return (
    <RHFController
      control={form?.control}
      name={name}
      render={({ field, fieldState }) => children({ field, fieldState })}
    />
  );
};

export function Submit({
  children,
}: {
  children: (
    context: Pick<UseFormReturn, "handleSubmit"> & {
      onSubmit: (data: Record<string, any>) => void;
    }
  ) => ReactNode;
}) {
  return (
    <FormContext.Consumer>
      {(context) => {
        if (context === undefined || context === null) {
          throw new Error("Submit must be used within a Form component");
        }
        return children(context);
      }}
    </FormContext.Consumer>
  );
}

type FormProps = {
  validationSchema: Schema;
  onSubmit: (data: Record<string, any>) => void;
  defaultValues?: Record<string, any>;
  children: ReactNode;
};

export const Form: React.FC<FormProps> = ({
  validationSchema,
  onSubmit,
  defaultValues,
  children,
}) => {
  const resolver = useYupValidationResolver(validationSchema);
  const formMethods = useForm({ resolver, defaultValues });

  return (
    <View>
      <FormContext.Provider value={{ ...formMethods, onSubmit }}>
        {children}
      </FormContext.Provider>
    </View>
  );
};

export default {
  Form,
  Controller,
  Submit,
};
