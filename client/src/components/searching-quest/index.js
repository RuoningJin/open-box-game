import { useState, useEffect } from 'react';
import Loading from './Loading';
import Quests from './Quests';

import './index.scss';

export default function Searching(props) {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 7000);

  return (
    <>
      <main className='background-cloud'>
        {loading &&  <Loading />}
        {!loading && <Quests />}
      </main>
    </>
  )
}