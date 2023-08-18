import React from "react";
import SigninForm from "../../components/SigninForm/SigninForm";
import Header from "../../components/Header/Header";

const OrganizerSigninForm = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <SigninForm />
      </div>
    </>
  );
};

export default OrganizerSigninForm;
