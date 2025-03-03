import {Button, Input, NumberField, NumberFieldProps} from 'react-aria-components'
import PlusIcon from '../icons/plus.svg'
import MinusIcon from '../icons/minus.svg'
import styles from './NumberInput.module.css'

export default function NumberInput({...props}: NumberFieldProps) {
  return (
    <NumberField {...props} className={styles.field}>
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
