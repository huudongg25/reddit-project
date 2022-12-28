import React from "react";

interface Props {
  lable: string;
  type: string;
  placeholder: string;
  setData: any;
}

export default function Input({ lable, type, placeholder, setData }: Props) {
  return (
    <>
      <label htmlFor="">{lable}</label>
      {type === "textarea" ? (
        <textarea onChange={setData} placeholder={placeholder} className="input-about"></textarea>
      ) : (
        <input
          onChange={setData}
          type={type || "text"}
          placeholder={placeholder}
        />
      )}
    </>
  );
}
