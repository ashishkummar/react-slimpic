import React from "react";
import { Badge, ProgressBar } from "react-bootstrap";
import DownloadFile from "./DownloadFile";
import DownlodAllFiles from "./DownlodAllFiles";

export default function PreviewFiles({ files, compressedFiles }) {
  //console.log("ipsf ", files, compressedFiles);

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

  return (<><br/>
    <div
      style={{
        width: "88%",
        margin: "auto",
        border: "1px solid black",
        height: "200px",
        overflowY: "scroll",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: `repeat(${files.length},  40px )`,
          gridGap: "10px",
          padding: "10px",
          placeItems: "center",
        }}
      >
        {files.map(
          (
            file,
            index // use the map function to loop through the array and generate a grid cell for each element
          ) => (
            <React.Fragment key={index}>
              <div key={index + "A"} style={{}}>
                {/*file.type.startsWith("image/") && (
                  <img
                    className="rounded float-left"
                    src={file.previewUrl}
                    alt={file.name}
                    style={{ maxWidth: "100px", maxHeight: "80px" }}
                  />
                )*/}

                <Badge bg="secondary"> {file.name}</Badge>
              </div>

              <div key={index + "B"} style={{}}>
                <Badge bg="secondary"> {formatBytes(file.size)}</Badge>
              </div>

              <div key={index + "C"} style={{}}>
                {/*file.type.startsWith("image/") && (
                  <img
                    className="rounded float-left"
                    src={file.cpreviewUrl}
                    alt={file.name}
                    style={{ maxWidth: "100px", maxHeight: "80px" }}
                  />
                )*/}
                {formatBytes(file.csize)}
              </div>

              <div key={index + "D"} style={{ display: "flex", flexDirection: "row" }}>
                <style type="text/css">
                  {` 
                    .pbar{
                      border:1px solid;
                      border-radius:50px;
                      width:100px;
                      height:20px
                      color: #000000;
                      text-align: center;
                      font-size:14px
                        
                    } 
                      `}
                </style>

                <div
                  className="pbar"
                  style={{
                    background: `linear-gradient(to right, yellow ${percentDiff(
                      file.csize,
                      file.size
                    )}%, white 0%`,
                  }}
                > 
                  -{percentDiff(file.csize, file.size)}%{" "} 
                </div>

                <DownloadFile filename={file.name} compressedImage={file.cpreviewUrl} />

              </div>
              
            </React.Fragment>
          )
        )}
      </div>
    </div>
<br/>
       <DownlodAllFiles allFiles={files}/> </>
  );
}
