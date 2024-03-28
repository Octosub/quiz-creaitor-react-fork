export default function Timer({ countdown }) {
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <>
      <div>
        <p>Time: {minutes}:{seconds < 10 ? '0' : ''}{seconds}</p>
      </div>
    </>
    );
  }
