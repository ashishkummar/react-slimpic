import React, { useState, useCallback } from "react";
import { Badge, ProgressBar } from "react-bootstrap";
import DownloadFile from "./DownloadFile";
import DownlodAllFiles from "./DownlodAllFiles";
import PreviewImage from "./PreviewImage";

export default function PreviewFiles({ files, compressedFiles }) {
  //console.log("ipsf ", files, compressedFiles);

  const [showPreview, setShowPreview] = useState({ state: false, imageData:null });

  function formatBytes(bytes) {
    if (bytes < 1024) {
      return bytes + " bytes";
    } else if (bytes < 1024 * 1024) {
      return (bytes / 1024).toFixed(2) + " KB";
    } else if (bytes < 1024 * 1024 * 1024) {
      return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    } else {
      return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
    }
  }

  function percentDiff(num1, num2) {
    let difference = Math.abs(num1 - num2);
    let average = (num1 + num2) / 2;
    let percentageDifference = 100 - (num1 / num2) * 100;
    return percentageDifference.toFixed(2);
  }

  const handlePreviewClick = function (imageDataObj) {
    setShowPreview(imageDataObj);
  };

  const hidePreviewImage = function () {
    setShowPreview({ state: false });
  };

  return (
    <>
      {showPreview.state ? (
        <PreviewImage
          hideHandler={hidePreviewImage}
          imageData={showPreview.imageData}
          
        />
      ) : (
        ""
      )}
      <br />
      <div
        style={{
          width: "80%",
          margin: "auto",
          padding: "10px",
          borderRadius: "25px",
          border: "1px dashed black",
          height: "auto",
          //overflowY: "scroll",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: `repeat(${files.length},  40px )`,
            gridGap: "0px",
            padding: "0px",
            placeItems: "center",
          }}
        >
          {files.map((file, index) => (
            <React.Fragment key={index}>
              <div
                key={index + "A"}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  border: "0px solid",
                  justifyContent: "left",
                  marginLeft: "25px",
                  alignItems: "center",
                }}
              >
                <div
                  onClick={() =>
                    handlePreviewClick({ state: true, imageData:file})
                  }
                >
                  {file.type.startsWith("image/") && (
                    <img
                      className="rounded float-left"
                      src={file.previewUrl}
                      alt={file.name}
                      style={{ maxWidth: "60px", cursor: "pointer" }}
                    />
                  )}
                </div>
                <div> &nbsp; {file.name} </div>
              </div>

              <div key={index + "D"}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <style type="text/css">
                    {` 
                    .progressbar{
                      border:1px solid;
                      border-radius:50px;
                      width:300px; 
                      color: #000000;
                      text-align: center;
                      font-size:13px
                        
                    } 
                      `}
                  </style>
                  <div style={{ width: "90px" }}>
                    {" "}
                    {formatBytes(file.size)}{" "}
                  </div>

                  <div
                    className="progressbar"
                    style={{
                      background: `linear-gradient(to right, yellow ${percentDiff(
                        file.csize,
                        file.size
                      )}%, white 0%`,
                    }}
                  >
                    -{percentDiff(file.csize, file.size)}%{" "}
                  </div>
                  <div style={{ width: "90px" }}>
                    {" "}
                    {formatBytes(file.csize)}
                  </div>
                </div>
              </div>
              <div
                key={index + "C"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "flex-end",
                }}
              >
                {/*file.type.startsWith("image/") && (
                  <img
                    className="rounded float-left"
                    src={file.cpreviewUrl}
                    alt={file.name}
                    style={{ maxWidth: "100px", maxHeight: "80px" }}
                  />
                )*/}

                <DownloadFile
                  filename={file.name}
                  compressedImage={file.cpreviewUrl}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <br />
      <DownlodAllFiles allFiles={files} />{" "}
    </>
  );
}
