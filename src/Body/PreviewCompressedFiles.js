import React from "react";
import { Badge } from "react-bootstrap";


export default function PreviewCompressedFiles({ files }) {

  console.info(files);

 


  return (
    

 
    <div   style={{ width:"900px", height: "300px", overflowY: "scroll" }}>
      <div  style={{ display: "grid", gridTemplateRows: `repeat(${files.length}, 80px)`, gridGap: "20px", padding: "20px" }}>
        {files.map((file, index) => (
          <div className="border border-primary rounded "  key={index} style={{ display: "flex", alignItems: "center" }}>
            {file.type.startsWith("image/") && (
              <div style={{ marginRight: "20px" }}>
                <img className="rounded float-left" src={file.previewUrl} alt={file.name} style={{ maxWidth: "100px", maxHeight: "80px" }} />
              </div>
            )}
            <div style={{ flex: 1 }}>
              
              <Badge bg="secondary">  {file.name} </Badge> 
              
               <Badge bg="secondary">  {file.type} </Badge>
               
              <Badge bg="secondary">  { (file.size / 1024).toFixed(2)} KB </Badge>

              <Badge bg="secondary"> {file.width} x {file.height}</Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
 
}
