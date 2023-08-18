import { Form, InputNumber } from "antd";
import React from "react";

export default function FormInputNumber({
  name,
  label,
  rules = [
    {
      required: false,
    },
  ],
  className,
  placeholder,
  min,
  max,
}) {
  return (
    <>
      <Form.Item name={name} label={label} rules={rules}>
        <InputNumber
          min={min}
          max={max}
          className={className}
          placeholder={placeholder}
        />
      </Form.Item>
    </>
  );
}
