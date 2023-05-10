import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function PreviewImage(prop) {

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

  return (
    <>
      <style type="text/css">
        {` 
        
        .modal-content {
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            pointer-events: auto;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid rgba(0,0,0,.2);
            border-radius: .3rem;
            outline: 0;
        }
        `}
      </style>
      <Modal show={true} size="lg">
        <Modal.Header  >
          <Modal.Title>Compare Compressed and Original Image</Modal.Title>{" "}
          <Button onClick={prop.hideHandler} variant="secondary">
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display:'flex', alignItems: 'center',flexDirection:"column", width: "100%", overflow: "auto" }}>
             <div>
            <img  src={prop.imageData.cpreviewUrl} /></div>
            <div>
            Compressed Image Size: {formatBytes(prop.imageData.csize)}
            </div>
            <div>
            <img  src={prop.imageData.previewUrl} /></div>
            <div>Original Image Size: {formatBytes(prop.imageData.size)}</div>
            
          </div>
        </Modal.Body>
      </Modal>

      <Modal.Footer>PreviewImage</Modal.Footer>
    </>
  );
}
