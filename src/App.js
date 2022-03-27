import React, { useState, memo, useCallback } from 'react';
import './style.css';

const Rectangle = (props) => {
  const { width, height, top, left, rectangleBuilder } = props;
  return <div style={rectangleBuilder(width, height, top, left)}></div>;
};

export default function App() {
  const [rec1, setRec1] = useState({
    width: 300,
    height: 400,
    top: 50,
    left: 40,
  });

  const [rec2, setRec2] = useState({
    width: 400,
    height: 500,
    top: 150,
    left: 70,
  });

  const rectangleBuilder = (width, height, top, left) => {
    return {
      position: `absolute`,
      border: `1px solid black`,
      width: `${width}px`,
      height: `${height}px`,
      top: `${top}px`,
      left: `${left}px`,
    };
  };

  const overlapHandeler = () => {
    let top = Math.max(rec1.top, rec2.top);
    let left = Math.max(rec1.left, rec2.left);
    let width = Math.min(rec1.left + rec1.width, rec2.left + rec2.width) - left;
    let height = Math.min(rec1.top + rec1.height, rec2.top + rec2.height) - top;
    return {
      position: `absolute`,
      border: `1px solid yellow`,
      background: `red`,
      width: `${width}px`,
      height: `${height}px`,
      top: `${top}px`,
      left: `${left}px`,
    };
  };

  return (
    <div>
      <Rectangle
        width={rec1.width}
        height={rec1.height}
        top={rec1.top}
        left={rec1.left}
        rectangleBuilder={rectangleBuilder}
      />
      <Rectangle
        width={rec2.width}
        height={rec2.height}
        top={rec2.top}
        left={rec2.left}
        rectangleBuilder={rectangleBuilder}
      />
      <Rectangle
        width={overlapHandeler.width}
        height={overlapHandeler.height}
        top={overlapHandeler.top}
        left={overlapHandeler.left}
        rectangleBuilder={overlapHandeler}
      />
    </div>
  );
}
