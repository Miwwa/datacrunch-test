import {FormEvent, useState} from 'react'
import {Form, Label, TextField} from 'react-aria-components'
import TextInput from '../components/TextInput.tsx'
import NumberInput from '../components/NumberInput.tsx'
import SliderInput from '../components/SliderInput.tsx'
import ButtonWrapper, {ButtonVariant} from '../components/ButtonWrapper.tsx'
import TrashIcon from '../icons/trash.svg'
import styles from './TestForm.module.css'

export type TestFormProps = {
  onSubmit?: (data: FormData) => void;
}

type FormData = {
  name: string;
  size: number;
}

const minSizeValue = 0
const maxSizeValue = 64
const defaultFormData: FormData = {
  name: '',
  size: 0,
}

export default function TestForm({onSubmit}: TestFormProps) {
  const [name, setName] = useState(defaultFormData.name)
  const [size, setSize] = useState(defaultFormData.size)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit?.({name, size})
  }

  const reset = (e: FormEvent) => {
    e.preventDefault()
    setName(defaultFormData.name)
    setSize(defaultFormData.size)
  }

  return (
    <Form className={`${styles.flexColumn}`} onSubmit={submit} onReset={reset}>
      {/* Name Input */}
      <TextField className={`${styles.flexColumn} ${styles.gap8} ${styles.marginBottom24}`}>
        <Label>Name</Label>
        <div className={styles.nameInput}>
          <TextInput value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
      </TextField>
      {/* Size Input */}
      <div className={`${styles.flexRow} ${styles.gap8} ${styles.marginBottom32}`}>
        <TextField className={`${styles.flexColumn} ${styles.gap8}`}>
          <Label>Size (Gb)</Label>
          <NumberInput
            value={size}
            minValue={minSizeValue}
            maxValue={maxSizeValue}
            onChange={setSize}
          />
        </TextField>
        <SliderInput
          value={size}
          minValue={minSizeValue}
          maxValue={maxSizeValue}
          onChange={setSize}
        />
      </div>
      {/* Buttons */}
      <div className={`${styles.flexRow} ${styles.flexJustifyStretch} ${styles.gap16}`}>
        <ButtonWrapper type="reset" icon={<TrashIcon/>} variant={ButtonVariant.Outlined}>
          Clear
        </ButtonWrapper>
        <ButtonWrapper type="submit">
          Submit
        </ButtonWrapper>
      </div>
    </Form>
  )
}

