import Timer from '../Timer/timer';
import './testprogress.css';

export default function Testprogress({ testData, correctCount, countdown }) {

  return (
    <>
      <div className='textprogress-container'>
        <>
          <Timer time={testData && testData.time} countdown={countdown} />
        </>
        <hr />
        <>
          <div className='score'>
            {correctCount !== null ? (
              <>
                <p className='stext'>Score</p>
                <div className='counting'>
                  <div className='ccount'>{correctCount * 10}</div>
                  <div className='max-points'>/{testData && <span>{testData.max_score}</span>}</div>
                </div>
              </>
            ) : null}
          </div>
        </>
      </div>
        <div className='test'>
          <div className='challenges'>
          </div>
        </div>
    </>
  );
}
