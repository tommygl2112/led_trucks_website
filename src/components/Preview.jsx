import React, { useEffect, useRef, useState } from "react";
import "../style/preview/previewStylesTest.scss";
import "../style/preview/f150Styles.css";
import "../style/preview/f250Styles.css";
import "../style/preview/isuzuStyles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Preview() {
  const sidesClassList = [
    "image1-side-f150",
    "image2-side-f150",
    "image3-side-f150",
    "image4-side-f150",
    "image5-side-f150",
    "image6-side-f150",
    "image7-side-f150",
    "image8-side-f150",
    "image9-side-f150",
    "image10-side-f150",
    "image11-side-f150",
    "image12-side-f150",
    "image13-side-f150",
    "image14-side-f150",
    "image15-side-f150",
    "image16-side-f150",
    "image17-side-f150",
    "image18-side-f150",
  ];
  const backClassList = [
    "image1-back-f150",
    "image2-back-f150",
    "image3-back-f150",
    "image4-back-f150",
    "image5-back-f150",
    "image6-back-f150",
    "image7-back-f150",
    "image8-back-f150",
    "image9-back-f150",
    "image10-back-f150",
    "image11-back-f150",
    "image12-back-f150",
    "image13-back-f150",
    "image14-back-f150",
    "image15-back-f150",
    "image16-back-f150",
    "image17-back-f150",
    "image18-back-f150",
    "image18-side-f150",
  ];

  const f250SidesClassList = [
    "image1-side-f250",
    "image2-side-f250",
    "image3-side-f250",
    "image4-side-f250",
    "image5-side-f250",
    "image6-side-f250",
    "image7-side-f250",
    "image8-side-f250",
    "image9-side-f250",
    "image10-side-f250",
    "image11-side-f250",
    "image12-side-f250",
    "image13-side-f250",
    "image14-side-f250",
    "image15-side-f250",
    "image16-side-f250",
    "image17-side-f250",
    "image18-side-f250",
    "image19-side-f250",
    "image20-side-f250",
  ];
  const f250BackClassList = [
    "image1-back-f250",
    "image2-back-f250",
    "image3-back-f250",
    "image4-back-f250",
    "image5-back-f250",
    "image6-back-f250",
    "image7-back-f250",
    "image8-back-f250",
    "image9-back-f250",
    "image10-back-f250",
    "image11-back-f250",
    "image12-back-f250",
    "image13-back-f250",
    "image14-back-f250",
    "image15-back-f250",
    "image16-back-f250",
    "image17-back-f250",
    "image18-back-f250",
    "image19-back-f250",
    "image20-back-f250",
  ];

  const isuzuSidesClassList = [
    "image1-side-isuzu",
    "image2-side-isuzu",
    "image3-side-isuzu",
    "image4-side-isuzu",
    "image5-side-isuzu",
    "image6-side-isuzu",
    "image7-side-isuzu",
    "image8-side-isuzu",
    "image9-side-isuzu",
    "image10-side-isuzu",
    "image11-side-isuzu",
    "image12-side-isuzu",
    "image13-side-isuzu",
    "image14-side-isuzu",
    "image15-side-isuzu",
    "image16-side-isuzu",
    "image17-side-isuzu",
    "image18-side-isuzu",
    "image19-side-isuzu",
  ];
  const isuzuBackClassList = [
    "image1-back-isuzu",
    "image2-back-isuzu",
    "image3-back-isuzu",
    "image4-back-isuzu",
    "image5-back-isuzu",
    "image6-back-isuzu",
    "image7-back-isuzu",
    "image8-back-isuzu",
    "image9-back-isuzu",
    "image10-back-isuzu",
    "image11-back-isuzu",
    "image12-back-isuzu",
    "image13-back-isuzu",
    "image14-back-isuzu",
    "image15-back-isuzu",
    "image16-back-isuzu",
    "image17-back-isuzu",
    "image18-back-isuzu",
    "image19-back-isuzu",
  ];

  const [imgNum, setImgNum] = useState(0);
  const [sidesImgClass, setSidesImgClass] = useState(sidesClassList[0]);
  const [backImgClass, setBackImgClass] = useState(backClassList[0]);

  const [sidesImg, setSidesImg] = useState("");
  const [backImg, setBackImg] = useState("");

  const [prevMouseX, setPrevMouseX] = useState(null);
  const [minMouseMovement, setMinMouseMovement] = useState(50);

  const [hideSideImg, setHideSideImg] = useState(true);
  const [hideBackImg, setHideBackImg] = useState(true);

  const [f250SidesImgClass, setf250SidesImgClass] = useState(
    f250SidesClassList[0]
  );
  const [f250BackImgClass, setf250BackImgClass] = useState(
    f250BackClassList[0]
  );

  const [f250HideSideImg, setf250HideSideImg] = useState(true);
  const [f250HideBackImg, setf250HideBackImg] = useState(true);

  const [isuzuSidesImgClass, setIsuzuSidesImgClass] = useState(
    isuzuSidesClassList[0]
  );
  const [isuzuBackImgClass, setIsuzuBackImgClass] = useState(
    isuzuBackClassList[0]
  );

  const [isuzuHideSideImg, setIsuzuHideSideImg] = useState(true);
  const [isuzuHideBackImg, setIsuzuHideBackImg] = useState(true);

  const [mouseDown, setMouseDown] = useState(false); // nuevo estado para indicar si el mouse está siendo presionado
  const [truck, setTruck] = useState("f150");
  const [fileType, setFileType] = useState("jpg");

  const reader = new FileReader();
  const handleFileChange = (e, sides) => {
    const file = e.target.files[0];

    if (file === undefined || !file.type.startsWith("image/")) {
      return;
    }

    if (sides === true) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        setSidesImg(reader.result);
        setHideSideImg(false);
      };
    } else {
      // back
      reader.readAsDataURL(file);

      reader.onload = () => {
        setBackImg(reader.result);
        setHideBackImg(false);
      };
    }
  };

  const handleMouseMove = (e) => {
    
    if (mouseDown) {
      if (prevMouseX === null) {
        setPrevMouseX(e.clientX);
        return;
      }

      const mouseDiff = e.clientX - prevMouseX;

      if (Math.abs(mouseDiff) > minMouseMovement) {
        if (mouseDiff > 0) {
          // moved to the right
          if (truck == "f150") {
            const newIndex = (imgNum + 1) % sidesClassList.length;
            setImgNum(newIndex);
            setSidesImgClass(sidesClassList[newIndex]);
            setBackImgClass(backClassList[newIndex]);
          } else if (truck == "f250") {
            const newIndex = (imgNum + 1) % f250SidesClassList.length;
            setImgNum(newIndex);
            setSidesImgClass(f250SidesClassList[newIndex]);
            setBackImgClass(f250BackClassList[newIndex]);
          } else if (truck == "isuzu") {
            const newIndex = (imgNum + 1) % isuzuSidesClassList.length;
            setImgNum(newIndex);
            setSidesImgClass(isuzuSidesClassList[newIndex]);
            setBackImgClass(isuzuBackClassList[newIndex]);
          }
        } else {
          // moved to the left
          if (truck == "f150") {
            const newIndex =
              (imgNum + sidesClassList.length - 1) % sidesClassList.length;
            setImgNum(newIndex);
            setSidesImgClass(sidesClassList[newIndex]);
            setBackImgClass(backClassList[newIndex]);
          }
          if (truck == "f250") {
            const newIndex =
              (imgNum + f250SidesClassList.length - 1) %
              f250SidesClassList.length;
            setImgNum(newIndex);
            setSidesImgClass(f250SidesClassList[newIndex]);
            setBackImgClass(f250BackClassList[newIndex]);
          }
          if (truck == "isuzu") {
            const newIndex =
              (imgNum + isuzuSidesClassList.length - 1) %
              isuzuSidesClassList.length;
            setImgNum(newIndex);
            setSidesImgClass(isuzuSidesClassList[newIndex]);
            setBackImgClass(isuzuBackClassList[newIndex]);
          }
        }

        setPrevMouseX(e.clientX);
      }
    }
  };

  const handleMouseDown = () => {
    setMouseDown(true); // establece el estado para indicar que el mouse está siendo presionado
  };

  const handleMouseUp = () => {
    setMouseDown(false); // establece el estado para indicar que el mouse ya no está siendo presionado
  };

  const handleTouchMove = (e) => {
    if (prevMouseX === null) {
      setPrevMouseX(e.touches[0].clientX);
      return;
    }

    const mouseDiff = e.touches[0].clientX - prevMouseX;

    if (Math.abs(mouseDiff) > minMouseMovement) {
      if (mouseDiff > 0) {
        // moved to the right
        if (truck == "f150") {
          const newIndex = (imgNum + 1) % sidesClassList.length;
          setImgNum(newIndex);
          setSidesImgClass(sidesClassList[newIndex]);
          setBackImgClass(backClassList[newIndex]);
        } else if (truck == "f250") {
          const newIndex = (imgNum + 1) % f250SidesClassList.length;
          setImgNum(newIndex);
          setSidesImgClass(f250SidesClassList[newIndex]);
          setBackImgClass(f250BackClassList[newIndex]);
        } else if (truck == "isuzu") {
          const newIndex = (imgNum + 1) % isuzuSidesClassList.length;
          setImgNum(newIndex);
          setSidesImgClass(isuzuSidesClassList[newIndex]);
          setBackImgClass(isuzuBackClassList[newIndex]);
        }
      } else {
        // moved to the left
        if (truck == "f150") {
          const newIndex =
            (imgNum + sidesClassList.length - 1) % sidesClassList.length;
          setImgNum(newIndex);
          setSidesImgClass(sidesClassList[newIndex]);
          setBackImgClass(backClassList[newIndex]);
        }
        if (truck == "f250") {
          const newIndex =
            (imgNum + f250SidesClassList.length - 1) %
            f250SidesClassList.length;
          setImgNum(newIndex);
          setSidesImgClass(f250SidesClassList[newIndex]);
          setBackImgClass(f250BackClassList[newIndex]);
        }
        if (truck == "isuzu") {
          const newIndex =
            (imgNum + isuzuSidesClassList.length - 1) %
            isuzuSidesClassList.length;
          setImgNum(newIndex);
          setSidesImgClass(isuzuSidesClassList[newIndex]);
          setBackImgClass(isuzuBackClassList[newIndex]);
        }
      }

      setPrevMouseX(e.touches[0].clientX);
    }
  };

  const handleTouchStart = (e) => {
    setPrevMouseX(e.touches[0].clientX);
    setMouseDown(true);
  };

  const handleTouchEnd = (e) => {
    setMouseDown(false);
  };

  // Change truck style ===============================

  const changeTruckLeft = (truck) => {
    if (truck == "f150") {
      setTruck("isuzu");
      setFileType("png");
      setImgNum(0);

      setSidesImgClass(isuzuSidesClassList[0]);
      setBackImgClass(isuzuBackClassList[0]);
    } else if (truck == "f250") {
      setTruck("f150");
      setFileType("jpg");
      setImgNum(0);

      setSidesImgClass(sidesClassList[0]);
      setBackImgClass(sidesClassList[0]);
    } else {
      setTruck("f250");
      setFileType("png");
      setImgNum(0);

      setSidesImgClass(f250SidesClassList[0]);
      setBackImgClass(f250BackClassList[0]);
    }
  };

  const changeTruckRight = (truck) => {
    if (truck == "f150") {
      setTruck("f250");
      setFileType("png");
      setImgNum(0);

      setSidesImgClass(f250SidesClassList[0]);
      setBackImgClass(f250BackClassList[0]);
    } else if (truck == "f250") {
      setTruck("isuzu");
      setFileType("png");
      setImgNum(0);

      setSidesImgClass(isuzuSidesClassList[0]);
      setBackImgClass(isuzuBackClassList[0]);
    } else {
      setTruck("f150");
      setFileType("jpg");
      setImgNum(0);

      setSidesImgClass(sidesClassList[0]);
      setBackImgClass(sidesClassList[0]);
    }
  };

  return (
    // all component
    <div className="container-preview">
      {/* Truck side =============================== */}
      <div className="container-preview__container-truck">
        <div>
          <label
            htmlFor="left-button"
            className="container-preview__container-truck__button-left"
          >
            <FaChevronLeft className="container-preview__container-truck__button-left__arrow" />
          </label>
          <button
            className=""
            onClick={() => changeTruckLeft(truck)}
            id="left-button"
          ></button>
        </div>

        <div
          className="container-preview__container-truck__truck"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown} // agrega el evento onMouseDown para detectar cuando el mouse se presiona
          onMouseUp={handleMouseUp} // agrega el evento onMouseUp para detectar cuando el mouse se deja de presionar
          onTouchMove={handleTouchMove} // nuevo manejador de evento para el evento touchmove
          onTouchStart={handleTouchStart} // nuevo manejador de evento para el evento touchstart
          onTouchEnd={handleTouchEnd} // nuevo manejador de evento para el evento touchend
        >
          <img
            src={`images/${truck}/truck${imgNum}.${fileType}`}
            alt="Truck"
            draggable="false"
          ></img>

          <img
            src={`${sidesImg}`}
            className={`${sidesImgClass}`}
            alt="Truck"
            hidden={hideSideImg}
            draggable="false"
          ></img>
          <img
            src={`${backImg}`}
            className={`${backImgClass}`}
            alt="Truck"
            hidden={hideBackImg}
            draggable="false"
          ></img>
        </div>

        <div>
          <label
            htmlFor="right-button"
            className="container-preview__container-truck__button-right"
          >
            <FaChevronRight className="container-preview__container-truck__button-right__arrow" />
          </label>
          <button
            className=""
            onClick={() => changeTruckRight(truck)}
            id="right-button"
          ></button>
        </div>
      </div>

      {/* buttons side ============================== */}
      <div className="container-preview__uploads">
        <img
          className="container-preview__uploads__img-360"
          id="preview-360-png"
          src="images/preview-360.png"
          alt=""
        />
        <div className="container-preview__uploads__container-buttons">
          <label htmlFor="file-upload-sides1" className="container-preview__uploads__container-buttons__upload-button">
            Upload Sides
          </label>
          <input
            id="file-upload-sides1"
            type="file"
            onChange={(e) => handleFileChange(e, true)}
            className="container-preview__uploads__container-buttons__sides"
            accept="image/jpg, image/jpeg, image/png"
          />

          <label htmlFor="file-upload-back1" className="container-preview__uploads__container-buttons__upload-button">
            Upload Back
          </label>
          <input
            id="file-upload-back1"
            type="file"
            onChange={(e) => handleFileChange(e, false)}
            className="container-preview__uploads__container-buttons__back"
            accept="image/jpg, image/jpeg, image/png"
          />
        </div>
        <div className="container-preview__uploads__generate-preview">
          <h3>Generate preview</h3>
          <img src="images/attachment 1.png" alt="attachment" />
        </div>
        <h1 className="container-preview__uploads__h1-files-format">Only JPG, JPEG y PNG are alowed.</h1>
      </div>
    </div>
  );
}
