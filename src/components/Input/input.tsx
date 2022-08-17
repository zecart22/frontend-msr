import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

import {
  Input as CkakraInput,
  Textarea as CkakraTextarea,
  InputProps,
  TextareaProps,
} from "@chakra-ui/react";

export function Input({ ...rest }: InputProps) {
  return <CkakraInput {...rest} />;
}

export function TextArea({ ...rest }: TextareaProps) {
  return <CkakraTextarea {...rest}></CkakraTextarea>;
}
