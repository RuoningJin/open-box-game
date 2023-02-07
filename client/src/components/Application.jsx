import React from 'react';
import Button from './Button';
import { useNavigate } from "react-router-dom";

import './Application.scss';

export default function Application () {
  const navigate = useNavigate();
  const handleStartClick = () => navigate('/main');

  return (
    <main className='home-background'>
      <section>
        <Button onClick={handleStartClick}/>
      </section>
    </main>

  );
};