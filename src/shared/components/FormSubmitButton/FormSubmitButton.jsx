import React from "react";
import { Button, Form, Spin } from "antd";
import "./formSubmitButton.css";

function FormSubmitButton({
  label,
  type = "primary",
  className = "",
  onClick,
  disabled,
  isLoading,
}) {
  return (
    <>
      <Form.Item>
        <Button
          type={type}
          htmlType="submit"
          className={className}
          onClick={onClick}
          disabled={disabled}
        >
          {isLoading ? (
            <Spin className="flex items-center justify-center" id="btn-spin" />
          ) : (
            label
          )}
        </Button>
      </Form.Item>
    </>
  );
}

export default FormSubmitButton;
