import Timer from '../Timer/timer';

export default function Testprogress({ testData, correctCount, countdown, setCountdown }) {

  return (
    <>
      {/* {console.log(testData.time)} */}
      <div>
        <div className='score'>
          {correctCount !== null && <p>Current Score: {correctCount * 10}/{testData && <p>{testData.max_score}</p>}</p>}
        </div>
        <div className='test'>
          <>
            <Timer time={testData && testData.time} countdown={countdown} setCountdown={setCountdown}/>
          </>
          <div className='challenges'>
          </div>
        </div>
      </div>
    </>
  );
}
