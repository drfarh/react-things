export function getFinalState(baseState, queue) {
    let finalState = baseState;
  
    for (const item of queue) {
      if (typeof item === 'number') {
        // If item is a number, add it to the finalState
        finalState += item;
      } else if (typeof item === 'function') {
        // If item is a function, call it with finalState and update finalState
        finalState = item(finalState);
      }
    }
  
    return finalState;
  }
  