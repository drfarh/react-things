export default function ColorSwitch({ onChangeColor }) {
    function handleClick(event) {
      event.preventDefault();
      onChangeColor();
    }
  
    return (
      <button onClick={handleClick}>
        Change color
      </button>
    );
  }
  