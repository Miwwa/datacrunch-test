import styles from './App.module.css'
import {Form, Label, TextField} from "react-aria-components";
import TextInput from "./components/TextInput.tsx";
import NumberInput from "./components/NumberInput.tsx";
import SliderInput from "./components/SliderInput.tsx";
import ButtonWrapper, {ButtonColor, ButtonSize, ButtonVariant} from "./components/ButtonWrapper.tsx";

function App() {

  return (
    <>
      <h1>Form</h1>
      <div className={styles.card}>
        <Form>
          <TextField>
            <Label>Name</Label>
            <TextInput/>
            <TextInput value="145" disabled={true}/>
          </TextField>
          <TextField>
            <Label>Size (GB)</Label>
            <NumberInput
              value={4}
              minValue={0}
              maxValue={128}
            />
            <NumberInput
              value={1}
              minValue={0}
              maxValue={128}
              isDisabled={true}
            />
          </TextField>
          <SliderInput
            minValue={0}
            maxValue={128}
          />
          <div style={{display: 'flex', gap: 8}}>
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
          </div>

          <div style={{display: 'flex', gap: 8, marginTop: 8}}>
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
          </div>

          <div style={{display: 'flex', gap: 8, marginTop: 8}}>
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
        </Form>
      </div>
    </>
  )
}

export default App
