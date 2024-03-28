export default function Testprogress({ testData }) {
    return (
      <>
      {/* {console.log(testData.id)} */}
      <div className="sidebar">
        <div className='score'>
          {/* <h5>Your current score: {correctCount * 10}</h5> */}
        </div>
      <div className='test'>
        {/* <p>ID: {testData.id}</p>
        <p>Max Score: {testData.max_score}</p>
        <p>Time: {testData.time}</p> */}
        <div className='challenges'>
        </div>
      </div>
      </div>
      </>
    );
}
