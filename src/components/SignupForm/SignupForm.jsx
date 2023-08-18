import { Form, message } from "antd";
import React, { useState } from "react";
import FormInput from "../../shared/components/FormInput/FormInput";
import FormSubmitButton from "../../shared/components/FormSubmitButton/FormSubmitButton";
import signin from "../../shared/assests/today.gif";
import { Link } from "react-router-dom";
import { SIGNIN } from "../../shared/constant/pageRoutes";
import { signUp } from "../../shared/api/authentication";
import {
  PASSWORD_NOT_MATCHED,
  PASSWORD_POLICY_ERROR,
  USER_EXIST,
} from "../../shared/constant/error";
import { FormRule } from "../../shared/enum/formRules";
import ApiErrorMessage from "../../shared/components/ApiErrorMessage/ApiErrorMessage";
import {
  PASSWORD_POLICY,
  TYPE,
  USER_ALREADY_EXIST,
} from "../../shared/constant/FormConstatnt";
import ConfirmSignup from "../ConfirmSignup/ConfirmSignup";
import { roleOptions } from "../../shared/enum/users";
import FormSelect from "../../shared/components/FormSelect/FormSelect";
import { createDataInDynamo } from "../../shared/api/dynamoApi";
// import { createBanquetManagementUser } from "../../graphql/mutations";

const SignupForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      if (values.password !== values.confirmPassword) {
        message.error(PASSWORD_NOT_MATCHED, 2);
        return;
      }
      setIsLoading(true);
      const response = await signUp(values.email, values.password);
      if (response === PASSWORD_POLICY_ERROR) {
        setErrorMessage(PASSWORD_POLICY);
        return;
      } else if (response === USER_EXIST) {
        setErrorMessage(USER_ALREADY_EXIST);
        return;
      } else {
        setEmail(values.email);
        setPassword(values.password);
        setRole(values.role);
        setConfirm(true);
      }
      const userDetails = {
        fullName: values.fullName,
        email: values.email,
        role: values.role,
        type: TYPE,
      };
      // const createUser = await createDataInDynamo(
      //   userDetails,
      //   createBanquetManagementUser,
      // );
      // setId(createUser.data.createBanquetManagementUser.id);
      setIsLoading(false);
      setErrorMessage(null);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(null);
      throw error(error.message);
    }
  };
  return (
    <div className="bg-white mt-12 flex">
      {confirm ? (
        <ConfirmSignup email={email} password={password} role={role} id={id} />
      ) : (
        <>
          <div className="flex items-center justify-center">
            <img src={signin} alt="" />
          </div>
          <div className="flex items-center justify-center flex-col gap-6">
            <span className="text-2xl text-bold">Sign Up</span>
            <Form
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
              initialValues={{
                remember: true,
              }}
            >
              <FormInput
                name="fullName"
                placeholder="Enter your Name"
                type="text"
                className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
                rules={FormRule.FULLNAME}
              />
              <FormInput
                name="email"
                placeholder="Enter your email"
                type="email"
                className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
                rules={FormRule.EMAIL}
              />
              <FormInput
                name="password"
                placeholder="Password"
                type="password"
                className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
                rules={FormRule.PASSWORD}
              />
              <FormInput
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
                rules={FormRule.CONFIRM_PASSWORD}
              />
              <FormSelect
                name="role"
                rules={FormRule.ROLE}
                options={roleOptions}
                placeholder="Please select a role"
                className="text-left"
              />
              <ApiErrorMessage errorMessage={errorMessage} />
              <FormSubmitButton
                className="mt-4 bg-blue-600 hover:!bg-blue-600 rounded-lg h-10 w-24 text-lg"
                label="Sign Up"
                type="primary"
                isLoading={isLoading}
              />
              <span>
                Already have an account? <Link to={SIGNIN}>Sign In</Link>
              </span>
            </Form>
          </div>
        </>
      )}
    </div>
  );
};

export default SignupForm;
