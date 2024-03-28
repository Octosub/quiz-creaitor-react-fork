import Timer from '../Timer/timer';

export default function Testprogress({ testData, correctCount }) {

  return (
    <>
      {/* {console.log(testData.time)} */}
      <div className="sidebar">
        <div className='score'>
          {correctCount !== null && <p>Current Score: {correctCount * 10}/{testData && <p>{testData.max_score}</p>}</p>}
        </div>
        <div className='test'>
          <>
            <Timer time={testData && testData.time}/>
          </>
          <div className='challenges'>
          </div>
        </div>
      </div>
    </>
  );
}
