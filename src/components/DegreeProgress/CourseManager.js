import React from 'react';

const SourceBox = () => {
  const handleDragStart = (event, data) => {
    event.dataTransfer.setData('text/plain', data); // Transfer associated data
  };

  return (
    <div
      draggable
      onDragStart={(event) => handleDragStart(event, 'Data associated with source box')}
    >
      Source Box
    </div>
  );
};

const TargetBox = () => {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain'); // Retrieve associated data
    console.log('Dropped data:', data);
  };

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop} id='temp'>
      Target Box
    </div>
  );
};

const DragAndDropApp = () => {
  return (
    <div>
      <SourceBox />
      <TargetBox />
    </div>
  );
};

export default DragAndDropApp;
