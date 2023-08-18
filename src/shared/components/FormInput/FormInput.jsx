import { Form, Input } from "antd";
import React from "react";
import { EMAIL, PASSWORD, TEXT } from "../../constant/FormConstatnt";

export default function FormInput({
  name,
  label,
  type = "text",
  rules = [
    {
      required: false,
    },
  ],
  placeholder,
  className,
  value,
  placeholderStyle, // Add a placeholderStyle prop
  disabled
}) {
  return (
    <>
      <Form.Item name={name} label={label} rules={rules} type={type}>
        {type === TEXT ? (
          <Input
            value={value}
            placeholder={placeholder}
            className={className}
            style={{ ...placeholderStyle }} // Apply the placeholder style
            disabled={disabled}
          />
        ) : type === EMAIL ? (
          <Input
            value={value}
            placeholder={placeholder}
            className={className}
            // style={{ ...placeholderStyle }}
            disabled={disabled}
          />
        ) : (
          type === PASSWORD && (
            <Input.Password
              value={value}
              placeholder={placeholder}
              className={className}
              // style={{ ...placeholderStyle }}
              disabled={disabled}
            />
          )
        )}
      </Form.Item>
    </>
  );
}
