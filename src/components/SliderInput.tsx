import {useState} from 'react'
import {Slider, SliderProps, SliderThumb, SliderTrack} from 'react-aria-components'
import styles from './SliderInput.module.css'

export default function SliderInput({onChange, minValue = 0, maxValue = 100, ...props}: SliderProps<number>) {
  const [fillPercent, setFillPercent] = useState(0)

  return (
    <Slider
      {...props}
      className={styles.slider}
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
