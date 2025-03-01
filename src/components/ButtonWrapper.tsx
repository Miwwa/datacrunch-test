import {ReactNode} from 'react'
import {Button, ButtonProps} from 'react-aria-components'
import styles from './ButtonWrapper.module.css'

export enum ButtonSize {
  Small = 'sm',
  Medium = 'md',
}

export enum ButtonColor {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ButtonVariant {
  Contained = 'contained',
  Outlined = 'outlined',
}

export type ButtonWrapperProps = {
  children: ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  isDisabled?: boolean;
} & ButtonProps;

const stylesMap = {
  [ButtonSize.Small]: styles.sm,
  [ButtonSize.Medium]: styles.md,

  [ButtonColor.Primary]: styles.primary,
  [ButtonColor.Secondary]: styles.secondary,

  [ButtonVariant.Contained]: styles.contained,
  [ButtonVariant.Outlined]: styles.outlined,
}

export default function ButtonWrapper(
  {
    size = ButtonSize.Medium,
    color = ButtonColor.Primary,
    variant = ButtonVariant.Contained,
    ...props
  }: ButtonWrapperProps,
) {
  const buttonClass = `${styles.button} ${stylesMap[size]} ${stylesMap[color]} ${stylesMap[variant]}`

  return (
    <Button
      className={buttonClass}
      {...props}
    >
      {props.children}
    </Button>
  )
}
