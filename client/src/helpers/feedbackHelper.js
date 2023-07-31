export function updateFeedback (bait, curFeedback) {
  const originalFeedback = {
    1: {positive: [8, 2], reward: [8, 2], count: 10}, 
    2: {positive: [2, 8], reward: [2, 8], count: 10}, 
    3: {positive: [8, 2], reward: [2, 8], count: 10}, 
    4: {positive: [2, 8], reward: [8, 2], count: 10}
  };

  const feedback = {...curFeedback.current};

  let isPositive;
  let hasReward;

  for (const feedbackGroup in feedback) {
    if (feedback[feedbackGroup].count === 0) {
      feedback[feedbackGroup] = {...originalFeedback[feedbackGroup]}
    }
  }

  if (bait < 4) {
    if (!feedback[1].positive[1] 
      || (feedback[1].positive[0] && Math.random() <= feedback[1].positive[0] / feedback[1].count)) {
      const newPositive = newFeedbackItem(feedback[1], 'positive', 0);
      const newCount = feedback[1].count - 1;
      isPositive = true;

      feedback[1] = {
        ...feedback[1], positive: newPositive, count: newCount
      }

    } else {
      const newPositive = newFeedbackItem(feedback[1], 'positive', 1);
      const newCount = feedback[1].count - 1;
      isPositive = false;

      feedback[1] = {
        ...feedback[1], positive: newPositive, count: newCount
      }
    }

    if (!feedback[1].reward[1] 
      || (feedback[1].reward[0] && Math.random() <= feedback[1].reward[0] / feedback[1].count)) {
      const newReward = newFeedbackItem(feedback[1], 'reward', 0);
      hasReward = true;

      feedback[1] = {
        ...feedback[1], reward: newReward
      }

    } else {
      const newReward = newFeedbackItem(feedback[1], 'reward', 1);
      hasReward = false;

      feedback[1] = {
        ...feedback[1], reward: newReward
      }
    }
  } else if (bait >= 4 && bait < 7) {

    if (!feedback[2].positive[1] 
      || (feedback[2].positive[0] && Math.random() <= feedback[2].positive[0] / feedback[1].count)) {
      const newPositive = newFeedbackItem(feedback[2], 'positive', 0);
      const newCount = feedback[2].count - 1;
      isPositive = true;

      feedback[2] = {
        ...feedback[2], positive: newPositive, count: newCount
      }

    } else {
      const newPositive = newFeedbackItem(feedback[2], 'positive', 1);
      const newCount = feedback[2].count - 1;
      isPositive = false;

      feedback[2] = {
        ...feedback[2], positive: newPositive, count: newCount
      }
    }

    if (!feedback[2].reward[1] || 
      (feedback[2].reward[0] && Math.random() <= feedback[2].reward[0] / feedback[1].count)) {
      const newReward = newFeedbackItem(feedback[2], 'reward', 0);
      hasReward = true;

      feedback[2] = {
        ...feedback[2], reward: newReward
      }

    } else {
      const newReward = newFeedbackItem(feedback[2], 'reward', 1);
      hasReward = false;

      feedback[2] = {
        ...feedback[2], reward: newReward
      }
    }

  } else if (bait >= 7 && bait < 10) {

    if (!feedback[3].positive[1] 
      || (feedback[3].positive[0] && Math.random() <= feedback[3].positive[0] / feedback[1].count)) {
      const newPositive = newFeedbackItem(feedback[3], 'positive', 0);
      const newCount = feedback[3].count - 1;
      isPositive = true;

      feedback[3] = {
        ...feedback[3], positive: newPositive, count: newCount
      }

    } else {
      const newPositive = newFeedbackItem(feedback[3], 'positive', 1);
      const newCount = feedback[3].count - 1;
      isPositive = false;

      feedback[3] = {
        ...feedback[3], positive: newPositive, count: newCount
      }
    }

    if (!feedback[3].reward[1] 
      || (feedback[3].reward[0] && Math.random() <= feedback[3].reward[0] / feedback[1].count)) {
      const newReward = newFeedbackItem(feedback[3], 'reward', 0);
      hasReward = true;

      feedback[3] = {
        ...feedback[3], reward: newReward
      }

    } else {
      const newReward = newFeedbackItem(feedback[3], 'reward', 1);
      hasReward = false;

      feedback[3] = {
        ...feedback[3], reward: newReward
      }
    }
  } else if (bait >= 10 && bait < 13) {

    if (!feedback[4].positive[1] 
      || (feedback[4].positive[0] && Math.random() <= feedback[4].positive[0] / feedback[1].count)) {
      const newPositive = newFeedbackItem(feedback[4], 'positive', 0);
      const newCount = feedback[4].count - 1;
      isPositive = true;

      feedback[4] = {
        ...feedback[4], positive: newPositive, count: newCount
      }

    } else {
      const newPositive = newFeedbackItem(feedback[4], 'positive', 1);
      const newCount = feedback[4].count - 1;
      isPositive = false;

      feedback[4] = {
        ...feedback[4], positive: newPositive, count: newCount
      }
    }

    if (!feedback[4].reward[1] 
      || (feedback[4].reward[0] && Math.random() <= feedback[4].reward[0] / feedback[1].count)) {
      const newReward = newFeedbackItem(feedback[4], 'reward', 0);
      hasReward = true;

      feedback[4] = {
        ...feedback[4], reward: newReward
      }

    } else {
      const newReward = newFeedbackItem(feedback[4], 'reward', 1);
      hasReward = false;

      feedback[4] = {
        ...feedback[4], reward: newReward
      }
    }
  }
  return {isPositive, hasReward, feedback};
};

const newFeedbackItem = (feedback, item, index) => {
  if (index === 0 ) {
    const newItem = [feedback[item][0] - 1, feedback[item][1]];

    return newItem;
  } else {
    const newItem = [feedback[item][0], feedback[item][1] - 1];

    return newItem;
  }
}