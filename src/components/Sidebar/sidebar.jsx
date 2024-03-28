import Dropzone from "../DropZone/dropzone";
import TestProgress from "../TestProgress/testprogress";

export default function Sidebar({ setTestData, testData, correctCount }) {
    return (
      <>
      <div className="sidebar">
        <div className="sidebar-head">
          toggle
        </div>
        <div className="dropzone">
          <Dropzone setTestData={setTestData} />
        </div>
        <div className="test-prgress">
          <TestProgress testData={testData} correctCount={correctCount}/>
        </div>
      </div>
      </>
    );
}
