import React, { useState } from 'react';
import styles from './Moving.module.css'
import { useMeasure } from "@uidotdev/usehooks";

const MovingBox = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [boxRef, { width, height }] = useMeasure();
  const w=Math.floor(width);
  const h =Math.floor(height);
  
  const move = (direction) => {
    switch (direction) {
      case 'left':
        setPosition((prevPos) => ({ ...prevPos, left: prevPos.left - w/10 }));
        break;
      case 'right':
        setPosition((prevPos) => ({ ...prevPos, left: prevPos.left + w/10 }));

        break;
      case 'up':
        setPosition((prevPos) => ({ ...prevPos, top: prevPos.top - h/10 }));

        break;
      case 'down':
        setPosition((prevPos) => ({ ...prevPos, top: prevPos.top + h/10 }));

        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.container}>

      <section className={styles.top}> 
      {
        position.top<=0 ?(      <button style={{opacity:"50%"}}>Up</button>
        ):      <button onClick={() => move('up')}>Up</button>

      }


      </section>

      <section className={styles.middle}>
      {
        position.left<=0 ?(      <button style={{opacity:"50%"}}>Left</button>):   
                   <button onClick={() => move('left')}>Left</button>

      }

                <div ref={boxRef} className={styles.box}>

                    <div 
                        style={{    backgroundColor: "#b5dc36",position:"absolute" , top: `${position.top}px`, left: `${position.left}px`,height:h/10,width:w/10 }}
                    >
                </div>
            </div>
            {
        position.left>=w-2*w/10 ?(      <button style={{opacity:"50%"}}>Right</button>):   
        <button onClick={() => move('right')}>Right</button>
    }
        {/* <button onClick={() => move('right')}>Right</button> */}


      </section>

      <section className={styles.bottom}>
      {
        position.top>=h-h/10 ?(      <button style={{opacity:"50%"}}>Down</button>):   
        <button onClick={() => move('down')}>Down</button>
    }
      </section>
    </div>
  );
};

export default MovingBox;
