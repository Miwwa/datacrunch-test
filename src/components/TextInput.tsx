import {Input, InputProps} from 'react-aria-components'
import styles from './TextInput.module.css'

export type TextInputProps = {
  placeholder?: string;
  onChange?: (value: string) => void;
} & InputProps;

export default function TextInput({onChange, placeholder = 'enter text', ...props}: TextInputProps) {
  return (
    <Input
      className={styles.input}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
      {...props}
    />
  )
}
