import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./FormModal.css";
import { Modal } from "antd";

function FormModal({
  isModalOpen,
  setIsModalOpen,
  children,
  title = "",
  handleCancel,
  bodyStyle,
  setIsReasonModalOpen = false,
  setIsDeleteModalOpen = false,
}) {
  const closeModalHandler = () => {
    setIsModalOpen(false);
    setIsReasonModalOpen && setIsReasonModalOpen(false);
    setIsDeleteModalOpen && setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Modal
        destroyOnClose
        open={isModalOpen}
        closeIcon={<CloseCircleOutlined className="text-xl text-black" />}
        title={<h3 className="text-center">{title}</h3>}
        footer={null}
        className="!w-[350px] md:!w-[420px]"
        onCancel={handleCancel ? handleCancel : closeModalHandler}
        bodyStyle={bodyStyle}
      >
        {children}
      </Modal>
    </>
  );
}

export default FormModal;
