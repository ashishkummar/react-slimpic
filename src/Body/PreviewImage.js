import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function PreviewImage(prop) {
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
          <Modal.Title>Preview Compressed Image</Modal.Title>{" "}
          <Button onClick={prop.hideHandler} variant="secondary">
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div style={{ width: "100%", overflow: "auto" }}>
            {" "}
            <img src={prop.cImage} />
          </div>
        </Modal.Body>
      </Modal>

      <Modal.Footer>PreviewImage</Modal.Footer>
    </>
  );
}
