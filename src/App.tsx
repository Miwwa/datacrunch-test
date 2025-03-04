import styles from './App.module.css'
import TextInput from './components/TextInput.tsx'
import NumberInput from './components/NumberInput.tsx'
import SliderInput from './components/SliderInput.tsx'
import ButtonWrapper, {ButtonColor, ButtonSize, ButtonVariant, IconPosition} from './components/ButtonWrapper.tsx'
import PlusIcon from './icons/plus.svg'
import TrashIcon from './icons/trash.svg'
import TestForm from './form/TestForm.tsx'
import {useState} from 'react'

function App() {

  const [formText, setFormText] = useState('')

  return (
    <>
      {/* Test form */}
      <h1>Form</h1>
      <div className={`${styles.card} ${styles.formCardWidth}`}>
        <TestForm onSubmit={(data) => setFormText(`Name: ${data.name}, Size: ${data.size}Gb`)}/>
        {formText && <div>{formText}</div>}
      </div>
      {/* Components showcase */}
      <h1>Showcase</h1>
      <div className={`${styles.card} ${styles.showCardWidth}`}>
        <div className={styles.header}>Text Input</div>
        <div>normal</div>
        <TextInput/>
        <div>disabled</div>
        <TextInput value="1234" disabled={true}/>

        <div className={styles.header}>Number Input</div>
        <div>normal</div>
        <NumberInput
          defaultValue={0}
          minValue={0}
          maxValue={128}
        />
        <div>disabled</div>
        <NumberInput
          defaultValue={1}
          minValue={0}
          maxValue={128}
          isDisabled={true}
        />

        <div className={styles.header}>Slider</div>
        <SliderInput
          minValue={0}
          maxValue={16}
        />

        <div className={styles.header}>Button</div>
        <div style={{display: 'grid', gap: 8, gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'}}>
          {/* Small Buttons */}
          <ButtonWrapper
            size={ButtonSize.Small}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Contained}
          >
            Button
          </ButtonWrapper>
          <ButtonWrapper
            size={ButtonSize.Small}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Outlined}
          >
            Button
          </ButtonWrapper>
          <ButtonWrapper
            size={ButtonSize.Small}
            color={ButtonColor.Secondary}
            variant={ButtonVariant.Contained}
          >
            Button
          </ButtonWrapper>
          <ButtonWrapper
            size={ButtonSize.Small}
            color={ButtonColor.Secondary}
            variant={ButtonVariant.Outlined}
          >
            Button
          </ButtonWrapper>
          {/* Small Buttons with icons */}
          <ButtonWrapper
            size={ButtonSize.Small}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Contained}
            icon={<PlusIcon/>}
            iconPosition={IconPosition.Start}
          >
            Button
          </ButtonWrapper>
          <ButtonWrapper
            size={ButtonSize.Small}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Contained}
            icon={<PlusIcon/>}
            iconPosition={IconPosition.End}
          >
            Button
          </ButtonWrapper>
          <ButtonWrapper
            size={ButtonSize.Small}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Contained}
            icon={<PlusIcon/>}
          />
          <ButtonWrapper
            size={ButtonSize.Small}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Contained}
            icon={<PlusIcon/>}
            isDisabled={true}
          >
            Button
          </ButtonWrapper>
          {/* Medium Buttons */}
          <ButtonWrapper
            size={ButtonSize.Medium}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Contained}
          >
            Button
          </ButtonWrapper>
          <ButtonWrapper
            size={ButtonSize.Medium}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Outlined}
          >
            Button
          </ButtonWrapper>
          <ButtonWrapper
            size={ButtonSize.Medium}
            color={ButtonColor.Secondary}
            variant={ButtonVariant.Contained}
          >
            Button
          </ButtonWrapper>
          <ButtonWrapper
            size={ButtonSize.Medium}
            color={ButtonColor.Secondary}
            variant={ButtonVariant.Outlined}
          >
            Button
          </ButtonWrapper>
          {/* Medium Buttons disabled */}
          <ButtonWrapper
            size={ButtonSize.Medium}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Contained}
            isDisabled={true}
          >
            Button
          </ButtonWrapper>
          <ButtonWrapper
            size={ButtonSize.Medium}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Outlined}
            isDisabled={true}
          >
            Button
          </ButtonWrapper>
          <ButtonWrapper
            size={ButtonSize.Medium}
            color={ButtonColor.Secondary}
            variant={ButtonVariant.Contained}
            isDisabled={true}
          >
            Button
          </ButtonWrapper>
          <ButtonWrapper
            size={ButtonSize.Medium}
            color={ButtonColor.Secondary}
            variant={ButtonVariant.Outlined}
            isDisabled={true}
          >
            Button
          </ButtonWrapper>
          {/* Medium Buttons with icons */}
          <ButtonWrapper
            size={ButtonSize.Medium}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Outlined}
            icon={<TrashIcon/>}
            iconPosition={IconPosition.Start}
          >
            Button
          </ButtonWrapper>
          <ButtonWrapper
            size={ButtonSize.Medium}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Outlined}
            icon={<TrashIcon/>}
            iconPosition={IconPosition.End}
          >
            Button
          </ButtonWrapper>
          <ButtonWrapper
            size={ButtonSize.Medium}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Outlined}
            icon={<TrashIcon/>}
          />
          <ButtonWrapper
            size={ButtonSize.Medium}
            color={ButtonColor.Primary}
            variant={ButtonVariant.Outlined}
            icon={<TrashIcon/>}
            isDisabled={true}
          >
            Button
          </ButtonWrapper>
        </div>
      </div>
    </>
  )
}

export default App
