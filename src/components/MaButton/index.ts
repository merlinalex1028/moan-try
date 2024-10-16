export type IButtonType = 'primary' | 'success' | 'error' | 'warning'

export interface IButtonProps {
  type?: IButtonType
  plain?: boolean
  rounded?: boolean
}

export const defaultButtonProps: IButtonProps = {
  type: 'primary',
  plain: false,
  rounded: false
}
