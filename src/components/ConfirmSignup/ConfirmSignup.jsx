import { Form } from "antd";
import React, { useState } from "react";
// import { updateBanquetManagementUser } from "../../graphql/mutations";
import FormInput from "../../shared/components/FormInput/FormInput";
import ApiErrorMessage from "../../shared/components/ApiErrorMessage/ApiErrorMessage";
import FormSubmitButton from "../../shared/components/FormSubmitButton/FormSubmitButton";
import { INVALID_CODE, SUCCESS } from "../../shared/constant/FormConstatnt";
import { userStatuses } from "../../shared/enum/users";
import { INVALID_CONFIRMATION_CODE } from "../../shared/constant/error";
import { updateUserDetails } from "../../shared/api/dynamoApi";
import { DASHBOARD } from "../../shared/constant/pageRoutes";
import { FormRule } from "../../shared/enum/formRules";
import signin from "../../shared/assests/today.gif";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { AdminAddUserToGroupCommand } from "@aws-sdk/client-cognito-identity-provider";
import { client } from "../../shared/constant/clinet";

const ConfirmSignup = ({ email, password, role, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const onConfirmSignup = async (values) => {
    setErrorMessage(null);
    try {
      setIsLoading(true);
      // Confirm Signup Api
      const result = await Auth.confirmSignUp(email, values.code);
      if (result === SUCCESS) {
        await Auth.signIn({
          username: email,
          password,
        });
        // Add user to group using admin action
        const addRoleParams = {
          GroupName: role,
          Username: email,
          UserPoolId: process.env.REACT_APP_USER_POOL_ID,
        };
        const command = new AdminAddUserToGroupCommand(addRoleParams);
        await client.send(command);
        // Update user status in db
        const updateUserStatus = {
          id,
          status: userStatuses.CONFIRMED,
        };
        // const userData = await updateUserDetails(
        //   updateUserStatus,
        //   updateBanquetManagementUser,
        // );
        // // saving the user data in localstorage
        // localStorage.setItem(
        //   "userDynamo",
        //   JSON.stringify(userData?.data?.updateBanquetManagementUser),
        // );
        navigate(DASHBOARD);
      }
    } catch (err) {
      err.message === INVALID_CONFIRMATION_CODE
        ? setErrorMessage(INVALID_CODE)
        : setErrorMessage(err.message);
      setIsLoading(false);
      throw new Error(err.message);
    }
  };

  return (
    <div className="flex">
      <div className="flex items-center justify-center">
        <img src={signin} alt="" />
      </div>
      <div className="flex items-center justify-center flex-col gap-3">
        <h1 className="font-sans text-3xl font-semibold md:text-4xl text-lightColor">
          Confirm Signup
        </h1>
        <span className="font-normal text-[12px] md:text-[14px] text-lightColor">
          Welcome back! Please enter your confirmation code.
        </span>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onConfirmSignup}
          className="flex flex-col items-center justify-center mt-4"
        >
          <FormInput
            name="code"
            type="text"
            rules={FormRule.CODE}
            placeholder="Confirmation Code"
            className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400"
            placeholderStyle={{ fontSize: "1.2rem", fontStyle: "italic" }}
          />
          <ApiErrorMessage errorMessage={errorMessage} />
          <FormSubmitButton
            className="mt-4 bg-blue-600 hover:!bg-blue-600 rounded-lg h-10 w-40 text-center text-lg"
            label="Confirm Signup"
            type="primary"
            isLoading={isLoading}
          />
        </Form>
      </div>
    </div>
  );
};

export default ConfirmSignup;
