import { useEffect } from 'react';

function Timer({ dispatch, expireTime }) {
  const mins = Math.floor(expireTime / 60);
  const seconds = expireTime % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({
        type: 'countTime',
      });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && '0'}
      {mins}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

export default Timer;
