import { Form, Spin } from "antd";
import React, { useEffect, useState } from "react";
import FormInput from "../../shared/components/FormInput/FormInput";
import FormSubmitButton from "../../shared/components/FormSubmitButton/FormSubmitButton";
import FormDatePicker from "../../shared/components/DatePicker/DatePicker";
import FormTimePicker from "../../shared/components/TimePicker/TimePicker";
import FormInputNumber from "../../shared/components/FormInputNumber/FormInputNumber";
import { FormRule } from "../../shared/enum/formRules";
import { createDataInDynamo } from "../../shared/api/dynamoApi";
// import { createBanquetManagementEvent } from "../../graphql/mutations";
import { TYPE } from "../../shared/constant/FormConstatnt";
import { convertToAWSTime, formatDate } from "../../shared/utils";

const HostEvents = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [dataLoading, setDataLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    // setDataLoading(true);
    const userDate = JSON.parse(localStorage.getItem("dynamoData"));
    setData(userDate);
    // setDataLoading(false);
  }, []);

  const onFinish = async (values) => {
    try {
      setIsLoading(true);
      const eventDetails = {
        eventTitle: values.eventTitle,
        userId: data?.id,
        venue: values.venue,
        description: values.description,
        participantsLimit: values.participantsLimit,
        bookingDate: formatDate(values.bookingDate),
        bookingStartTime: convertToAWSTime(values.bookingTime[0]),
        bookingEndTime: convertToAWSTime(values.bookingTime[1]),
        type: TYPE,
      };
      // await createDataInDynamo(eventDetails, createBanquetManagementEvent);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  const values = {
    fullName: data?.fullName,
    email: data?.email,
    phoneNumber: data?.phoneNumber,
  };
  return (
    <div className="flex items-center justify-center gap-6 h-full bg-custom-radial-gradient">
      {!data ? (
        <Spin />
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <span className="text-2xl text-bold antialiased">Host details</span>
            <Form
              name="hostDetail"
              onFinish={onFinish}
              autoComplete="on"
              initialValues={values}
            >
              <FormInput
                name="fullName"
                placeholder="Host Name"
                type="text"
                className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400 !bg-white"
                disabled={true}
              />
              <FormInput
                name="email"
                placeholder="Email"
                type="email"
                className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400 !bg-white"
                disabled={true}
              />
              <FormInput
                name="phoneNumber"
                placeholder="Phone Number"
                type="text"
                className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400 !bg-white"
                disabled={true}
              />
            </Form>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-2xl text-bold antialiased">
              Event details
            </span>
            <Form name="eventDetail" onFinish={onFinish} autoComplete="on">
              <FormInput
                name="eventTitle"
                placeholder="Event Titile"
                type="text"
                className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
                rules={FormRule.EVENT_TITLE}
              />
              <FormInput
                name="venue"
                placeholder="Venue"
                type="text"
                className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
                rules={FormRule.EVENTT_VENUE}
              />
              <FormInput
                name="description"
                placeholder="Short Description"
                type="text"
                className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
              />
              <FormInputNumber
                name="participantsLimit"
                placeholder="Participants Limit"
                min="1"
                max="200"
                className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400 flex items-center"
                rules={FormRule.PARTICIPANT_LIMIT}
              />
              <FormDatePicker
                name="bookingDate"
                format="MM-DD-YYYY"
                className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400 flex items-center"
                rules={FormRule.EVENT_DATE}
              />
              <FormTimePicker
                name="bookingTime"
                className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400 flex items-center"
                rules={FormRule.EVENT_TIME}
              />
              <FormSubmitButton
                className="mt-4 bg-blue-600 hover:!bg-blue-600 rounded-lg h-10 w-24 text-lg"
                label="Host"
                type="primary"
                isLoading={isLoading}
              />
            </Form>
          </div>
        </>
      )}
    </div>
  );
};

export default HostEvents;
