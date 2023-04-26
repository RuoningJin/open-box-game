import { useState, useEffect } from 'react';
import Loading from './Loading';

export default function Searching(props) {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 7000);

  return (
    <>
      {loading &&  <Loading />}
    </>
   
  )
}