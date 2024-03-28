import Timer from '../Timer/timer';

export default function Testprogress({ testData, correctCount, countdown }) {

  return (
    <>
      <div>
        <div className='score'>
          {correctCount !== null && <p>Current Score: {correctCount * 10}/{testData && <span>{testData.max_score}</span>}</p>}
        </div>
        <div className='test'>
          <>
            <Timer time={testData && testData.time} countdown={countdown} />
          </>
          <div className='challenges'>
          </div>
        </div>
      </div>
    </>
  );
}
