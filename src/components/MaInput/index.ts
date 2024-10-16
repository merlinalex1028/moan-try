export type IInputType = 'text' | 'password'

export interface IInputProps {
  clearable?: boolean
  showPassword?: boolean
}

export const defaultInputProps: IInputProps = {
  clearable: false,
  showPassword: false
}
