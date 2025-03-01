import {Input} from 'react-aria-components'
import styles from './TextInput.module.css'

export type TextInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function TextInput({value, onChange, placeholder = 'enter text', disabled = false}: TextInputProps) {
  return (
    <Input
      className={styles.input}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  )
}
