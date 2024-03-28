import Dropzone from "../DropZone/dropzone";
import TestProgress from "../TestProgress/testprogress";
import { useState } from 'react';

export default function Sidebar({ setTestData, testData, correctCount, countdown, setCountdown }) {
  const [showDropzone, setShowDropzone] = useState(true);

    return (
      <>
      <div>
      <div className="sidebar-head">
        <button onClick={() => setShowDropzone(true)} disabled={showDropzone}>
          Upload New Test
        </button>
        <button onClick={() => setShowDropzone(false)} disabled={!showDropzone}>
          Show Test Progress
        </button>
      </div>
        <div className="sidebar-head">
        </div>
        {showDropzone ? (
          <div className="dropzone">
            <Dropzone setTestData={setTestData} />
          </div>
        ) : (
          <div className="test-progress">
            <TestProgress testData={testData} correctCount={correctCount} countdown={countdown} setCountdown={setCountdown}/>
          </div>
        )}
      </div>
      </>
    );
}
