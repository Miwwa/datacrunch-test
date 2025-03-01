import {useState} from "react";
import {Slider, SliderThumb, SliderTrack} from "react-aria-components";
import styles from './SliderInput.module.css';

export type SliderInputProps = {
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
  minValue?: number
  maxValue?: number
}

export default function SliderInput({value, defaultValue, onChange, minValue = 0, maxValue = 100}: SliderInputProps) {
  const [fillPercent, setFillPercent] = useState(0)

  return (
    <Slider
      className={styles.slider}
      value={value}
      defaultValue={defaultValue}
      minValue={minValue}
      maxValue={maxValue}
      onChange={(v) => {
        setFillPercent(v / maxValue * 100)
        onChange?.(v)
      }}
    >
      <SliderTrack className={styles.track}>
        <div className={styles.fill} style={{width: `${fillPercent}%`}}/>
        <SliderThumb className={styles.thumb}/>
      </SliderTrack>
    </Slider>
  )
}
