import { useState } from 'react';
import { useImmer } from 'use-immer'; // Import useImmer
import BackgroundCh3 from './BackgroundCh3.jsx';
import BoxCh3 from './BoxCh3.jsx';

const initialPosition = {
  x: 0,
  y: 0
};

export default function CanvasCh3() {
  const [shape, setShape] = useImmer({ // Use useImmer instead of useState
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    setShape(draft => { // Update state using a function with draft
      draft.position.x += dx;
      draft.position.y += dy;
    });
  }

  function handleColorChange(e) {
    setShape(draft => ({ // Update state using a function with draft
      ...draft,
      color: e.target.value
    }));
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <BackgroundCh3
        position={initialPosition}
      />
      <BoxCh3
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </BoxCh3>
    </>
  );
}
