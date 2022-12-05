import React from "react";
import resumePDF from "./resumePDF.pdf";
import resumeStyle from "../Styles/Resume.module.css";

import { Viewer } from "@react-pdf-viewer/core"; // install this library
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core"; // install this library

const Resume = () => {
  return (
    <div className={resumeStyle.resume}>
      <div className={resumeStyle.downloadBtnDiv}>
        <a href={resumePDF} download="Sathya-Prasad-Resume">
          <button className={resumeStyle.downloadBtn}>
            Download Resume-PDF
          </button>
        </a>
      </div>
      <div className={resumeStyle.content}>
        <div className={resumeStyle.pdf}>
          {resumePDF && (
            <>
              <Worker
                className={resumeStyle.viewer}
                workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js"
              >
                <Viewer fileUrl={resumePDF} />
              </Worker>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
