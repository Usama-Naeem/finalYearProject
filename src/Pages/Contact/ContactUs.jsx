import React from "react";
import contact from "../../shared/assests/contactus.gif";
import { Form } from "antd";
import FormInput from "../../shared/components/FormInput/FormInput";
import TextAreaInput from "../../shared/components/TextAreaInput/TextAreaInput";
import FormSubmitButton from "../../shared/components/FormSubmitButton/FormSubmitButton";
import Header from "../../components/Header/Header";

const ContactUs = () => {
  const onFinish = () => {};
  return (
    <>
      <Header />
      <div className="bg-white mt-12">
        <div>
          <span>DROP US A</span>
          <br />
          <span className="font-bold text-2xl">MESSAGE</span>
        </div>
        <div className="flex items-center justify-center w-full gap-20">
          <img src={contact} alt="" className="mb-6" />
          <Form
            name="contact-form"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
          >
            <FormInput
              name="userName"
              placeholder="Your Name"
              type="text"
              className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
              placeholderStyle={{ fontSize: "1.2rem", fontStyle: "italic" }}
            />

            <FormInput
              name="email"
              placeholder="Email Id"
              type="email"
              className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
              placeholderStyle={{ fontSize: "1.2rem", fontStyle: "italic" }}
            />
            <FormInput
              name="subject"
              placeholder="Subject"
              className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
              placeholderStyle={{
                fontSize: "1.2rem",
                fontStyle: "italic",
                color: "blue !important",
              }}
            />
            <TextAreaInput
              name="message"
              placeholder="Message"
              rows={5}
              maxLength={200}
              className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
              placeholderStyle={{ fontSize: "1.2rem", fontStyle: "italic" }}
            />
            <FormSubmitButton
              label="Send Message"
              // loading={isLoading}
              className="mt-4 bg-blue-600 hover:!bg-blue-600 rounded-lg h-12"
              type="primary"
            />
          </Form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
