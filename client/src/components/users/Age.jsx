import { useState } from 'react';
import { 
  Box, 
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'

export default function Age () {
  const [sliderValue, setSliderValue] = useState(50)

  const labelStyles = {
    fontFamily: 'Rubik Vinyl',
    mt: '2',
    ml: '-4',
    fontSize: '25px',
  }

  return (
    <Slider defaultValue={15} min={3} max={50} step={1} onChange={(val) => setSliderValue(val)}>
        <SliderMark value={3} {...labelStyles}>
          3
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          color='black'
          mt='-65'
          ml='-75'
          w='100'
          fontSize='30'
          fontFamily='Rubik Vinyl'
        >
          {sliderValue} Years Old
        </SliderMark>
      <SliderTrack bg='red.100'>
        <Box position='relative' right={10} />
        <SliderFilledTrack bg='tomato' />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  )
}