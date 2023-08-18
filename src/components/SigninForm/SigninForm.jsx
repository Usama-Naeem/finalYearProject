import { Form, message } from "antd";
import React, { useState } from "react";
import FormInput from "../../shared/components/FormInput/FormInput";
import FormSubmitButton from "../../shared/components/FormSubmitButton/FormSubmitButton";
import signin from "../../shared/assests/today.gif";
import { Link, useNavigate } from "react-router-dom";
import { DASHBOARD, SIGNUP } from "../../shared/constant/pageRoutes";
import { groupType } from "../../shared/enum/users";
import { Auth } from "aws-amplify";
import { getUserByEmail } from "../../shared/api/dynamoApi";
import { listBanquetManagementUsers } from "../../graphql/queries";
import {
  INVALID_CREDENTIALS,
  USER_NOT_EXIST,
} from "../../shared/constant/error";

const SigninForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setIsLoading(true);
      const userData = await Auth.signIn({
        username: values.email,
        password: values.password,
      });
      // check user group
      const userGroups =
        userData?.signInUserSession?.idToken?.payload["cognito:groups"];
      const client = userGroups?.indexOf(groupType.CLIENT);
      const organizer = userGroups?.indexOf(groupType.ORGANIZER);

      // Validation - the userGroups is not null
      if (!userGroups?.length) {
        await Auth.signOut();
        setIsLoading(false);
        message.error(INVALID_CREDENTIALS, [3]);
        return;
      }
      // Validation - If the CHW, Admin and super Admin is not found in userGroups
      if (client === -1 && organizer === -1) {
        await Auth.signOut();
        setIsLoading(false);
        message.error(USER_NOT_EXIST, [3]);
        return;
      }
      // Store user details in localstorage
      const userDetails = await getUserByEmail(
        values.email.toLowerCase(),
        listBanquetManagementUsers,
      );
      localStorage.setItem(
        "dynamoData",
        JSON.stringify(userDetails.data.listBanquetManagementUsers.items[0]),
      );
      setIsLoading(false);
      navigate(DASHBOARD);
    } catch (error) {
      setIsLoading(false);
      throw Error(error.message);
    }
  };
  return (
    <div className="bg-white mt-12 flex">
      <div className="flex items-center justify-center">
        <img src={signin} alt="" />
      </div>
      <div className="flex items-center justify-center flex-col gap-6">
        <span className="text-2xl text-bold">Sign In</span>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="on"
          initialValues={{
            remember: true,
          }}
        >
          <FormInput
            name="email"
            placeholder="Enter your email"
            type="email"
            className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
          />
          <FormInput
            name="password"
            placeholder="Enter your password"
            type="password"
            className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
          />
          <FormSubmitButton
            className="mt-4 bg-blue-600 hover:!bg-blue-600 rounded-lg h-10 w-24 text-lg"
            label="Sign In"
            type="primary"
            isLoading={isLoading}
          />
          <span>
            Don't have an account? <Link to={SIGNUP}>Sign Up</Link>
          </span>
        </Form>
      </div>
    </div>
  );
};

export default SigninForm;
