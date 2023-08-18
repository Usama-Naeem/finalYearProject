import { Form, TimePicker } from "antd";
import React from "react";

const FormTimePicker = ({
  name,
  label,
  className,
  rules = [
    {
      required: false,
    },
  ],
  type = "text",
}) => (
  <>
    <Form.Item name={name} type={type} rules={rules} label={label}>
      <TimePicker.RangePicker
        status="warning"
        name={name}
        className={className}
      />
    </Form.Item>
  </>
);

export default FormTimePicker;
