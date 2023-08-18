import React from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import Header from "../../components/Header/Header";

const OrganizerSignup = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <SignupForm />
      </div>
    </>
  );
};

export default OrganizerSignup;
