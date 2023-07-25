import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData (initial) {
  const [allTrials, setAllTrials] = useState([]);

  useEffect(() => {
    if (!allTrials[0]) {
      Promise.all([
        axios.get('http://localhost:8001/api/trials'),
      ])
        .then((all) => {
          setAllTrials(all[0].data);
        });
    }
  }, []);

  return allTrials;
}