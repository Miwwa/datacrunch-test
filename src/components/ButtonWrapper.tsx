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

export enum IconPosition {
  Start = 'start',
  End = 'end',
}

export type ButtonWrapperProps = {
  children?: ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: IconPosition;
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
    children,
    icon,
    iconPosition = IconPosition.Start,
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
      {icon && iconPosition === IconPosition.Start && icon}
      {children && <span className={styles.label}>{children}</span>}
      {icon && iconPosition === IconPosition.End && icon}
    </Button>
  )
}
