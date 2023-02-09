// import { useRef, useState, useEffect } from 'react';
import './index.scss';
import Gender from './Gender';
import Age from './Age';
import { Card, CardBody, Stack, StackDivider, Box} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

export default function Users(props) {
  const navigate = useNavigate();
  const handleUserClick = () => navigate('/main');

  return (
    <>
        <section className='users-background'></section>
  
        <section className='gender-container'>

          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <div className={'gender-title'}>
                <span className="red">I'</span>
                <span className="blue">m</span>
                <span className="yellow">&nbsp;a</span>
                <span className="green">.</span>
                <span className="yellow">.</span>
                <span className="blue">.</span>
              </div>
              <Gender />
            </Box>

            <Box>
              <div className={'age-title'}>
                <span className="red">I'</span>
                <span className="blue">m</span>
                <span className="green">.</span>
                <span className="yellow">.</span>
                <span className="blue">.</span>
              </div>
              <Age />
            </Box>

            <button type="button" className={'confirm'} onClick={handleUserClick}>
              <span className="red">S</span>
              <span className="blue">t</span>
              <span className="yellow">a</span>
              <span className="green">r</span>
              <span className="red">t</span>
            </button>
          </Stack>



        </section>

    </>

  )
}