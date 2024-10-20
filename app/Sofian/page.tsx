"use client";
import React, { useState } from "react";

function Sofian() {
  const [title, setTitle] = useState<string>("ود الجزيرة");
  const [titleBackground, setTitleBackground] = useState<string>("#000000");
  const [background, setBackground] = useState<string>("#FFCF00");
  const [num1, setNum1] = useState<number>();
  const [color1, setColor1] = useState<string>("#000000");
  const [num2, setNum2] = useState<number>();
  const [color2, setColor2] = useState<string>("#311B92");
  const [num3, setNum3] = useState<number>();
  const [color3, setColor3] = useState<string>("#D50000");
  const [num4, setNum4] = useState<number>();
  const [color4, setColor4] = useState<string>("#33691E");

  return (
    <>
      <div className="contaner">
        <h1 className="text-center mt-4 text-white">تصميم رقم</h1>
        <div className="row">
          <div className="col-6">
            <label className="text-white pe-3">الشعار</label>
            <input
              type="text"
              className="form-control my-1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-3">
            <label className="text-white pe-3">لون الشعار</label>
            <input
              type="color"
              className="form-control my-1"
              value={titleBackground}
              onChange={(e) => setTitleBackground(e.target.value)}
            />
          </div>
          <div className="col-3">
            <label className="text-white pe-3">لون الخلفية</label>
            <input
              type="color"
              className="form-control my-1"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <label className="text-white px-4 my-2">ألوان الرقم</label>
          <div className="col">
            <textarea
                className="form-control my-1"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                rows="4"
            />
            {/* <input
              type="text"
              className="form-control my-1"
              value={num1}
              onChange={(e) => setNum1(Number(e.target.value))}
            /> */}
            <input
              type="color"
              className="form-control my-1"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
            />
          </div>
          <div className="col">
            <textarea
                className="form-control my-1"
                value={num2}
                onChange={(e) => setNum1(Number(e.target.value))}
                rows="4"
            />

            {/*  <input
              type="number"
              className="form-control my-1"
              value={num2}
              onChange={(e) => setNum2(Number(e.target.value))}
            /> */}
            <input
              type="color"
              className="form-control my-1"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
            />
          </div>
          <div className="col">
            <textarea
                className="form-control my-1"
                value={num3}
                onChange={(e) => setNum1(Number(e.target.value))}
                rows="4"
            />
            {/* <input
              type="number"
              className="form-control my-1"
              value={num3}
              onChange={(e) => setNum3(Number(e.target.value))}
            /> */}
            <input
              type="color"
              className="form-control my-1"
              value={color3}
              onChange={(e) => setColor3(e.target.value)}
            />
          </div>
          <div className="col">
            <textarea
                className="form-control my-1"
                value={num4}
                onChange={(e) => setNum1(Number(e.target.value))}
                rows="4"
                cols="50"
            />

            {/* <input
              type="number"
              className="form-control my-1"
              value={num4}
              onChange={(e) => setNum4(Number(e.target.value))}
            /> */}
            <input
              type="color"
              className="form-control my-1"
              value={color4}
              onChange={(e) => setColor4(e.target.value)}
            />
          </div>
        </div>
        <div
          className="row output my-4 p-5"
          style={{ backgroundColor: background }}
        >
          <h1
            className="text-center mt-4"
            style={{ color: titleBackground }}
          >
            {title}
          </h1>
          <h1 className="text-center font-bold">
            0<span style={{ color: color1 }}>{num1}</span>
            <span style={{ color: color2 }}>{num2}</span>
            <span style={{ color: color3 }}>{num3}</span>
            <span style={{ color: color4 }}>{num4}</span>
          </h1>
        </div>
      </div>
    </>
  );
}
export default Sofian;
