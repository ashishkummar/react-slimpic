import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Compressor from "compressorjs";
import PreviewFiles from "./PreviewFiles";
import PreviewCompressedFiles from "./PreviewCompressedFiles";

export default function Body() {
  const [files, setFiles] = useState([]);
  const [compressedFiles, setCompressedFiles] = useState([]);

  useEffect(() => {
    // Upload the files to the server here
    // console.log("Uploading files:", files);
  }, [files]);

  const handleFileDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    const newFiles = Array.from(droppedFiles).map((file) => {
      new Compressor(file, {
        quality: 0.7, // Set the desired quality (0 to 1)
        //maxWidth: 100, // Set the maximum width of the image
        //maxHeight: 100, // Set the maximum height of the image
        success: (compressedFile) => {
          const newFile = {
            name: file.name,
            type: file.type,
            previewUrl: file.type.startsWith("image/")
              ? URL.createObjectURL(file)
              : null,
            size: file.size,
            width: null,
            height: null,
            cpreviewUrl: URL.createObjectURL(compressedFile),
            csize: compressedFile.size,
          };

          if (file.type.startsWith("image/")) {
            const image = new Image();
            image.onload = () => {
              newFile.width = image.width;
              newFile.height = image.height;
            };
            image.src = newFile.previewUrl;
          }

          newFiles.push(newFile);
          setFiles((prevFiles) => [...prevFiles, newFile]);
        },
        error: (err) => {
          console.log(err.message);
        },
      });
    });
  };

  const handleFileSelect = (event) => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple=true
    input.accept = "image/png, image/jpeg";
    input.addEventListener("change", (event) => {
      const selectedFiles = event.target.files;

      //event.preventDefault();

      const newFiles = Array.from(selectedFiles).map((file, index) => {
        new Compressor(file, {
          quality: 0.7, // Set the desired quality (0 to 1)
          //maxWidth: 100, // Set the maximum width of the image
          //maxHeight: 100, // Set the maximum height of the image
          success: (compressedFile) => {
            const newFile = {
              name: file.name,
              type: file.type,
              previewUrl: file.type.startsWith("image/")
                ? URL.createObjectURL(file)
                : null,
              size: file.size,
              width: null,
              height: null,
              cpreviewUrl: URL.createObjectURL(compressedFile),
              csize: compressedFile.size,
            };

            if (file.type.startsWith("image/")) {
              const image = new Image();
              image.onload = () => {
                newFile.width = image.width;
                newFile.height = image.height;
              };
              image.src = newFile.previewUrl;
            }

            newFiles.push(newFile);
            setFiles((prevFiles) => [...prevFiles, newFile]);
          },
          error: (err) => {
            console.log(err.message);
          },
        });
      });
    });

    input.click();
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div
              className="  border-primary rounded p-1 text-center"
              onDrop={handleFileDrop}
              onDragOver={(event) => event.preventDefault()}
              
              style={{
                //background: "URL('images/dropimage.png') no-repeat center",
                //backgroundSize: "contain",
              }}
            >
              <div onClick={handleFileSelect} style={{cursor:"pointer",width:'70%', margin:"auto", borderRadius:"30px", border:"1px dashed", padding:"7px" }}  >
              <div><img style={{width:'80px'}} src="images/dropimage.png"/> </div>
              <div>Drop Your .JPG, .PNG files here.  </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {files.length > 0 && (
        <>
          <PreviewFiles files={files} />{" "}
        </>
      )}
      {/*files.length > 0 && <PreviewCompressedFiles files={compressedFiles} /> */}
    </div>
  );
}
