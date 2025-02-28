import {Button, Input, NumberField} from "react-aria-components";
import PlusIcon from '../icons/plus.svg'
import MinusIcon from '../icons/minus.svg'
import styles from './NumberInput.module.css'

export type NumberInputProps = {
  value?: number
  onChange?: (value: number) => void
  minValue?: number
  maxValue?: number
  isDisabled?: boolean
}

export default function NumberInput({value, onChange, minValue, maxValue, isDisabled}: NumberInputProps) {
  return (
    <NumberField
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      onChange={onChange}
      className={styles.field}
      isDisabled={isDisabled}
    >
      <Button slot="decrement" className={styles.button}>
        <MinusIcon/>
      </Button>
      <Input className={styles.input}/>
      <Button slot="increment" className={styles.button}>
        <PlusIcon/>
      </Button>
    </NumberField>
  )
}
