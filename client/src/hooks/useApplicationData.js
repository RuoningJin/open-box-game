import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData (initial) {
  const [state, setState] = useState({
    user: {},
    allTrials: []
  });

  useEffect(() => {
    if (!state.allTrials[0]) {
      Promise.all([
        axios.get('http://localhost:8001/api/users'),
        axios.get('http://localhost:8001/api/trials')
      ])
        .then((all) => {
          setState(prev => ({...prev, user: all[0].data, allTrials: all[1].data}));
        });
    }
  }, []);

  return {state};
}