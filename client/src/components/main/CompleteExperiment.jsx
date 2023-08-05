import './CompleteExperiment.scss';
import axios from 'axios';
import { useEffect } from 'react';

export default function CompleteExperiment(props) {

  const onCompletion = () => {
    const totalTimeUsed = ((Date.now() - props.startTimeRef.current) / 1000 / 60).toFixed(2);
    return axios.get(`http://localhost:8001/api/users/user_trial`, {
      params: {
        userId: props.userId,
        totalTimeUsed: totalTimeUsed
      }
    });
  }    

  useEffect (() => {
    onCompletion();
  }, [])
 
  return (
    <>
      <div className='complete-screen'>
        <h1>Thank you for your participation!</h1>
      </div>
    </>
  )
}