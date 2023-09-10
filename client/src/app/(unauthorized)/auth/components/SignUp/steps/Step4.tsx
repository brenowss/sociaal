import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Confetti from 'react-confetti';

export default function Step4() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const confettiContainer = document.createElement('div');
    confettiContainer.setAttribute('id', 'confetti-container');
    document.body.appendChild(confettiContainer);

    return () => {
      setShowConfetti(false);
      document.body.removeChild(confettiContainer);
    };
  }, []);

  return (
    <div>
      {showConfetti &&
        ReactDOM.createPortal(
          <Confetti
            style={{
              zIndex: 9999,
            }}
          />,
          document.getElementsByTagName('body')[0]!
        )}
    </div>
  );
}
