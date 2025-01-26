export interface FormConfig {
  initialValues: Record<string, Partial<FieldState>>;
  validationSchema?: Record<string, unknown>;
  onSubmit: (values: Record<string, string>) => void | Promise<void>;
}

export interface FieldState {
  name: string;
  type: string; 
  label: string;
  value: string;
  placeholder?: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface FormMessages {
  [key: string]: string;
}

export interface FieldsState {
  [key: string]: FieldState;
}

export type FieldNames = "userName" | "email" | "password" | "confirmPassword";