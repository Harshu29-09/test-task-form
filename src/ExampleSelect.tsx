import { OptionBase } from "chakra-react-select";

export interface ColorOption extends OptionBase {
  label: string;
  value: string;
  
}

export const colorOptions: ColorOption[] = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other"}
  
];