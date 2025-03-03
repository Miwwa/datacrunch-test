import {Input, InputProps} from 'react-aria-components'
import styles from './TextInput.module.css'

export type TextInputProps = InputProps & {
  placeholder?: string;
};

export default function TextInput({placeholder = 'enter text', ...props}: TextInputProps) {
  return (
    <Input
      className={styles.input}
      placeholder={placeholder}
      {...props}
    />
  )
}
