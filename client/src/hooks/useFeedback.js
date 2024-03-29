import { useRef } from "react";

export default function useFeedback (bait, curFeedback) {
  const originalFeedback = {
    1: {positive: [0.8, 0.2], reward: [0.8, 0.2], count: 10}, 
    2: {positive: [0.2, 0.8], reward: [0.2, 0.8], count: 10}, 
    3: {positive: [0.8, 0.2], reward: [0.2, 0.8], count: 10}, 
    4: {positive: [0.2, 0.8], reward: [0.8, 0.2], count: 10}
  };

  const feedback = {...curFeedback};

  let isPositive;
  let hasReward;

  for (const feedbackGroup in feedback) {
    if (feedbackGroup.count === 0) {
      feedback[feedbackGroup] = {...originalFeedback[feedbackGroup]}
    }
  }

  if (bait < 4) {
    if (Math.random() <= feedback[1].positive[0]) {
      const newPositive = newFeedbackItem(feedback[1], 'positive', 0);
      const newCount = feedback[1].count - 1;
      isPositive = true;

      feedback[1] = {
        ...feedback,
        1: {...feedback[1], positive: newPositive, count: newCount}
      }

    } else {
      const newPositive = newFeedbackItem(feedback[1], 'positive', 1);
      const newCount = feedback[1].count - 1;
      isPositive = false;

      feedback[1] = {
        ...feedback,
        1: {...feedback[1], positive: newPositive, count: newCount}
      }
    }

    if (Math.random() <= feedback[1].reward[0]) {
      const newReward = newFeedbackItem(feedback[1], 'reward', 0);
      hasReward = true;

      feedback[1] = {
        ...feedback,
        1: {...feedback[1], reward: newReward}
      }

    } else {
      const newReward = newFeedbackItem(feedback[1], 'reward', 1);
      hasReward = false;

      feedback[1] = {
        ...feedback,
        1: {...feedback[1], reward: newReward}
      }
    }
  } else if (bait >= 4 && bait < 7) {

    if (Math.random() <= feedback[2].positive[0]) {
      const newPositive = newFeedbackItem(feedback[2], 'positive', 0);
      const newCount = feedback[2].count - 1;
      isPositive = true;

      feedback[2] = {
        ...feedback,
        1: {...feedback[2], positive: newPositive, count: newCount}
      }

    } else {
      const newPositive = newFeedbackItem(feedback[2], 'positive', 1);
      const newCount = feedback[2].count - 1;
      isPositive = false;

      feedback[2] = {
        ...feedback,
        1: {...feedback[2], positive: newPositive, count: newCount}
      }
    }

    if (Math.random() <= feedback[2].reward[0]) {
      const newReward = newFeedbackItem(feedback[2], 'reward', 0);
      hasReward = true;

      feedback[2] = {
        ...feedback,
        1: {...feedback[2], reward: newReward}
      }

    } else {
      const newReward = newFeedbackItem(feedback[2], 'reward', 1);
      hasReward = false;

      feedback[2] = {
        ...feedback,
        1: {...feedback[2], reward: newReward}
      }
    }

  } else if (bait >= 7 && bait < 10) {

    if (Math.random() <= feedback[3].positive[0]) {
      const newPositive = newFeedbackItem(feedback[3], 'positive', 0);
      const newCount = feedback[3].count - 1;
      isPositive = true;

      feedback[3] = {
        ...feedback,
        1: {...feedback[3], positive: newPositive, count: newCount}
      }

    } else {
      const newPositive = newFeedbackItem(feedback[3], 'positive', 1);
      const newCount = feedback[3].count - 1;
      isPositive = false;

      feedback[3] = {
        ...feedback,
        1: {...feedback[3], positive: newPositive, count: newCount}
      }
    }

    if (Math.random() <= feedback[3].reward[0]) {
      const newReward = newFeedbackItem(feedback[3], 'reward', 0);
      hasReward = true;

      feedback[3] = {
        ...feedback,
        1: {...feedback[3], reward: newReward}
      }

    } else {
      const newReward = newFeedbackItem(feedback[3], 'reward', 1);
      hasReward = false;

      feedback[3] = {
        ...feedback,
        1: {...feedback[3], reward: newReward}
      }
    }
  } else if (bait >=10 && bait < 13) {

    if (Math.random() <= feedback[4].positive[0]) {
      const newPositive = newFeedbackItem(feedback[4], 'positive', 0);
      const newCount = feedback[4].count - 1;
      isPositive = true;

      feedback[4] = {
        ...feedback,
        1: {...feedback[4], positive: newPositive, count: newCount}
      }

    } else {
      const newPositive = newFeedbackItem(feedback[4], 'positive', 1);
      const newCount = feedback[4].count - 1;
      isPositive = false;

      feedback[4] = {
        ...feedback,
        1: {...feedback[4], positive: newPositive, count: newCount}
      }
    }

    if (Math.random() <= feedback[4].reward[0]) {
      const newReward = newFeedbackItem(feedback[4], 'reward', 0);
      hasReward = true;

      feedback[4] = {
        ...feedback,
        1: {...feedback[4], reward: newReward}
      }

    } else {
      const newReward = newFeedbackItem(feedback[4], 'reward', 1);
      hasReward = false;

      feedback[4] = {
        ...feedback,
        1: {...feedback[4], reward: newReward}
      }
    }
  }

  return {isPositive, hasReward};
};

const newFeedbackItem = (feedback, item, index) => {
  const newItem= [...feedback[item][index], ...feedback[item][index] - 0.1];

  return newItem;
}