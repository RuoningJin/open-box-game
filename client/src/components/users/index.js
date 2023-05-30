// import { useRef, useState, useEffect } from 'react';
import './index.scss';
import Gender from './Gender';
import Age from './Age';
import { Stack, Flex} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

export default function Users(props) {
  const navigate = useNavigate();
  const handleUserClick = () => navigate('/main');

  return (
    <main className='layout'>
        
        <section className='gender-container'>

          <Stack spacing='4'>
            <Flex direction='column' align='center'>
              <div className={'user-info-title'} style={{marginTop: '4vh'}}>
                <span className="red">I</span>
                <span className="blue">&nbsp;am</span>
                <span className="yellow">&nbsp;a</span>
              </div>
              <Gender />
            </Flex>

            <Flex direction='column' align='center'>
              <div className={'user-info-title'} style={{marginBottom: '-8vh'}}>
                <span className="red">I</span>
                <span className="blue">&nbsp;am</span>
              </div>
              <Age />
            </Flex>

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
    </main>
  )
}