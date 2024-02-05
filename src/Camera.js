import React, { useState, useRef } from 'react';
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;


function Camera(props) {
    const [preImage, setPreImage] = useState();
    const file = (e) => {
        // console.log(e.target.files[0])
        const fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0])
        fileReader.onload = (e) => {
            // console.log(e.target.result)
            setPreImage(e.target.result)
        }

    }

    const webcam = useRef();
    const [webcamImg, setWebcamImg] = useState();

    const capture = () => {
        const imgSrc = webcam.current.getScreenshot();
        setWebcamImg(imgSrc)
    }
    return (
        <div>
            {/* <form method='post' encType='multipart/form-data'></form> */}
            <img src={preImage} />
            <input type="file" name="photo" onChange={file} multiple />
            <Webcam
                ref={webcam}
                audio={false}
                screenshotFormat="image/jpeg"
                width="100%"
                height="auto"
            />
            <button
                onClick={capture}>
                Capture photo
            </button>
            {
                webcamImg && <div>
                    <img src={webcamImg} />
                    {webcamImg}
                </div>
            }
        </div>
    );
}

export default Camera;