import Timer from '../Timer/timer';

export default function Testprogress({ testData, currentCount }) {

  return (
    <>
      {/* {console.log(testData.time)} */}
      <div className="sidebar">
        <div className='score'>
          {/* <h5>Your current score: {correctCount * 10}</h5> */}
        </div>
        <div className='test'>
          <>
            {currentCount && <p>Current Score: {currentCount * 10}</p>}
            {testData && <p>Max Score: {testData.max_score}</p>}
            <Timer time={testData && testData.time}/>
          </>
          <div className='challenges'>
          </div>
        </div>
      </div>
    </>
  );
}
