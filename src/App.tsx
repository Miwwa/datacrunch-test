import styles from './App.module.css'
import {
  Button,
  Form,
  Group,
  Input,
  Label,
  NumberField,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  TextField
} from "react-aria-components";

function App() {

  return (
    <>
      <h1>Form</h1>
      <div className={styles.card}>
        <Form>
          <TextField>
            <Label>Name</Label>
            <Input/>
          </TextField>
          <NumberField defaultValue={4} minValue={0}>
            <Label>Size (GB)</Label>
            <Group>
              <Button slot="decrement">-</Button>
              <Input/>
              <Button slot="increment">+</Button>
            </Group>
          </NumberField>
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
