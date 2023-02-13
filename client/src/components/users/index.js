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

            <button type="button" className={'confirm-users'} onClick={handleUserClick}>
              <span className="red">C</span>
              <span className="blue">o</span>
              <span className="yellow">n</span>
              <span className="green">t</span>
              <span className="green">i</span>
              <span className="yellow">n</span>
              <span className="blue">u</span>
              <span className="red">e</span>
            </button>
          </Stack>

        </section>

    </>

  )
}