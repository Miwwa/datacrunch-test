import styles from './App.module.css'
import TextInput from "./components/TextInput.tsx";
import NumberInput from "./components/NumberInput.tsx";
import SliderInput from "./components/SliderInput.tsx";
import ButtonWrapper, {ButtonColor, ButtonSize, ButtonVariant} from "./components/ButtonWrapper.tsx";

function App() {

  return (
    <>
      <h1>Showcase</h1>
      <div className={styles.card}>
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
        <div style={{display: 'grid', gap: 8, gridTemplateColumns: 'repeat(4, 1fr)'}}>
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
        </div>
      </div>
    </>
  )
}

export default App
