import React from "react";
import { Form, Radio } from "antd";
const FormRadio = ({ defaultValue, options, name, label, rules }) => (
  <Form.Item name={name} label={label} rules={rules}>
    <Radio.Group name="radiogroup" defaultValue={defaultValue}>
      {options.map((el) => (
        <Radio value={el.value}>{el.label}</Radio>
      ))}
    </Radio.Group>
  </Form.Item>
);
export default FormRadio;
