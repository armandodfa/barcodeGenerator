import { useState } from "react";
import Barcode from "react-barcode/lib/react-barcode";
import React from "react";
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";
import { useCallback } from "react";

function App() {
  const [value, setValue] = useState("SAMple-123");
  const handleCaptureClick = useCallback(async () => {
    const downloadElmt = document.body.querySelector(".barcode");
    if (!downloadElmt) return;
    const canvas = await html2canvas(downloadElmt);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "barcode.png", "image/png");
  }, []);
  return (
    <div className="app">
      <h1>Barcode Generator</h1>
      <div className="wrapper">
        <textarea
          className="input"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div className="barcode">
          <Barcode value={value} onChange={value} />
        </div>
       <button className="downloadBtn" onClick={handleCaptureClick}>
          Download
        </button>
      </div>
      <footer>
      ©  <strong>_$ato</strong>
      </footer>
    </div>
  );
}

export default App;
