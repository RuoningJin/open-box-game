export function shuffleArray() {

  const shuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5);
  }

  const trials = {session1: [], session2: []};

  for (let i = 1; i < 73; i++) {
    trials.session1.push(i);
  };

  for (let i = 73; i < 145; i++) {
    trials.session2.push(i);
  };

  shuffle(trials.session1);
  shuffle(trials.session2);

  return trials;
}

export function orderAllTrials(trials) {
  const orderedSessionOne = shuffleArray().session1;
  const orderedSessionTwo = shuffleArray().session2;
  if (Math.random() < 0.5) {
    const orderedTrials = orderedSessionOne.concat(orderedSessionTwo);
    const newTrials = [];

    for (const order of orderedTrials) {
      newTrials.push(trials[order - 1])
    }

    return newTrials;
  } else {
    const orderedTrials = orderedSessionTwo.concat(orderedSessionOne);
    const newTrials = [];

    for (const order of orderedTrials) {
      newTrials.push(trials[order - 1])
    }

    return newTrials;
  }  
}

export function randomNum(baitCategory) {
  let add;

  if (baitCategory === 1) {
    add = 1;
  } else if (baitCategory === 2) {
    add = 4
  } else if (baitCategory === 3) {
    add = 7
  } else if (baitCategory === 4) {
    add = 10
  }

  return Math.floor(Math.random() * 3) + add;
}