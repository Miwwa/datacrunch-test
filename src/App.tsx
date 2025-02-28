import styles from './App.module.css'
import {
  Button,
  Form,
  Label,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  TextField
} from "react-aria-components";
import TextInput from "./components/TextInput.tsx";
import NumberInput from "./components/NumberInput.tsx";

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
          <Slider defaultValue={30}>
            <Label/>
            <SliderOutput/>
            <SliderTrack style={{height: 30}}>
              <SliderThumb/>
            </SliderTrack>
          </Slider>
          <div style={{display: 'flex', gap: 8}}>
            <Button type="reset">Clear</Button>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default App
