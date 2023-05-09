import React from "react";

export default function DownloadFile(prop) {
  console.info(prop.compressedImage);

  function DownloadTheFile() {
    const link = document.createElement("a");
    link.href = prop.compressedImage;
    link.download = prop.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return <div onClick={DownloadTheFile}><img title="Download" alt='click to download image' style={{ cursor:"pointer" ,marginTop:'-7px', marginLeft: '9px'}} src='file-earmark-arrow-down-fill.svg'></img></div>;
}
