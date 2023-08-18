import React from "react";
import { Form, Input } from "antd";
const { TextArea } = Input;

function TextAreaInput({
  label,
  name,
  type = "text",
  rules = [
    {
      required: false,
    },
  ],
  placeholder,
  className = "rounded-2xl",
  maxLength,
  rows,
  placeholderStyle, // Add a placeholderStyle prop
}) {
  return (
    <>
      <Form.Item label={label} name={name} rules={rules}>
        <TextArea
          rows={rows}
          maxLength={maxLength}
          type={type}
          size="large"
          placeholder={placeholder}
          className={className}
          style={{ ...placeholderStyle }} // Apply the placeholder style
        />
      </Form.Item>
    </>
  );
}

export default TextAreaInput;
