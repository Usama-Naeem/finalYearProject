import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { useState } from "react";
import FormModal from "../FormModal/FormModal";
import { Form, Input, Select, Button } from "antd";
import FormInputNumber from "../FormInputNumber/FormInputNumber";
import { FormRule } from "../../enum/formRules";
import FormSelect from "../FormSelect/FormSelect";
import { menuOptions } from "../../enum/users";
import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";
import { API } from "aws-amplify";

export function BookingCard({
  image,
  title,
  description,
  location,
  limit,
  date,
  time,
  user,
}) {
  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const buyTickets = async () => {
    console.log({ user });
    await createSubscriptionAndSendInvoice(user);
  };

  const createSubscriptionAndSendInvoice = async (user) => {
    try {
      console.log("i am in");
      const res = await API.put("stripePayments", "/paySubscription", {
        queryStringParameters: {
          userId: user.id,
          amount: "20",
        },
      });
      console.log("res", res);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return (
    <>
      <Card className="w-full max-w-[20rem] shadow-lg max-h-[25rem]">
        <CardHeader floated={false} color="blue-gray">
          <img
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="ui/ux review check"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {title}
            </Typography>
          </div>
          <div className="truncate overflow-hidden">
            <Typography
              className="whitespace-nowrap overflow-hidden text-ellipsis"
              color="gray"
            >
              {description}
            </Typography>
          </div>
          <div className="group mt-1 inline-flex flex-wrap items-center gap-3">
            <Tooltip content={location}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Tooltip>
            <Tooltip content={limit}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                    clipRule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
              </span>
            </Tooltip>
            <Tooltip content={date}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Tooltip>
            <Tooltip content={time}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Tooltip>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={openModalHandler}>Reserve</Button>
        </CardFooter>
      </Card>
      <FormModal
        isModalOpen={openModal}
        setIsModalOpen={setOpenModal}
        title="Booking Details"
      >
        <div className="pt-[40px] pb-[20px]">
          <Form
            layout="vertical"
            className=" flex items-center flex-col"
            onFinish={buyTickets}
          >
            <FormInputNumber
              name="participantsLimit"
              placeholder="How many tickets you want to book"
              min="1"
              max="200"
              className="rounded-lg border-blue-500 h-12 w-80 !text-bold !text-gray-400 flex items-center"
              rules={FormRule.TICKETS}
            />
            <FormSelect
              name="menu"
              rules={FormRule.MENU}
              options={menuOptions}
              placeholder="Which type of menu you want"
              className="rounded-lg border-blue-500 h-12 !w-80 !text-bold !text-gray-400 flex items-center"
            />
            <FormSubmitButton
              className="mt-4 bg-blue-600 hover:!bg-blue-600 rounded-lg h-10 w-40 text-center text-lg"
              label="Buy Tickets"
              type="primary"
            />
          </Form>
        </div>
      </FormModal>
    </>
  );
}
