import { useState, useEffect } from "react";

export default function useFeedback (initial) {
  const [feedback, setFeedback] = useState({
    1: {positive: [0.8, 0.2], reward: [0.8, 0.2]}, 
    2: {positive: [0.2, 0.8], reward: [0.2, 0.8]}, 
    3: {positive: [0.8, 0.2], reward: [0.2, 0.8]}, 
    4: {positive: [0.2, 0.8], reward: [0.8, 0.2]}
  });

  useEffect(() => {
    
  }, [feedback, setFeedback]);

  return [feedback, setFeedback];
}