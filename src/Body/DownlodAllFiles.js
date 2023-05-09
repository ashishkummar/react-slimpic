import JSZip from 'jszip'
import React from 'react'
 

export default function DownlodAllFiles(prop) {
  
  console.info(prop.allFiles[0].cpreviewUrl)
  
  
  const handleDownload = async () => {
    const zip = new JSZip();
  
    // loop through files and add them to zip object
    await Promise.all(
      prop.allFiles.map(async (file) => {
        const response = await fetch(file.cpreviewUrl);
        const data = await response.blob();
        zip.file(file.name, data);
      })
    );
  
    // generate zip file and initiate download
    zip.generateAsync({ type: "blob" }).then((content) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = "slimpic.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return <button onClick={handleDownload}className="btn btn-primary">Download zip</button>;
}
