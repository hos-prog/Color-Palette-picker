import React from 'react';

const ColorPreview = ({ color }) => {
  const previewStyle = {
    backgroundColor: color || '#fff',
  };

  return (
    <div className="preview" style={previewStyle}>
      {color ? <p>{color}</p> : <p>No color selected</p>}
    </div>
  );
};

export default ColorPreview;