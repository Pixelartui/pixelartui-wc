export interface SelectOption {
  label: string;
  value: string;
}

export type SelectType = 'main' | 'inline';
export type SelectStyle = 'dark' | 'light';

export interface SelectIconProps {
  open: boolean;
  disabled?: boolean;
  backgroundColor?: string;
}
