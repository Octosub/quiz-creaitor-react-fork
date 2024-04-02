import "./timer.css";

export default function Timer({ countdown }) {
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <>
      <div className="whole-timer">
        <p className="ttext">Remaining Time</p>
        <div className="countdown">
          {minutes}:{seconds < 10 ? '0' : ''}{seconds}
        </div>
      </div>
    </>
    );
  }
