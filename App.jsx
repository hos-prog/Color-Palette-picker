import React, { useState } from 'react';
import ColorButton from './Components/ColorButton';
import ColorPreview from './Components/ColorPreview';


const COLORS = ['red', 'green', 'blue', 'yellow', 'purple'];

const App = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleReset = () => {
    setSelectedColor(null);
  };

  return (
    <div>
      <h1>ðŸŽ¨ Color Palette Picker</h1>
      <div>
        {COLORS.map((color) => (
          <ColorButton
            key={color}
            color={color}
            onClick={() => handleColorSelect(color)}
          />
        ))}
      </div>

      <button onClick={handleReset} style={{ backgroundColor: '#333' }}>
        Reset
      </button>

      <ColorPreview color={selectedColor} />
    </div>
  );
};

export default App;