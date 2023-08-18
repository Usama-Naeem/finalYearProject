import { API, graphqlOperation } from "aws-amplify";
import { TYPE } from "../constant/FormConstatnt";
import { message } from "antd";
import { listBanquetManagementEventsByDate } from "../../graphql/queries";

export const updateUserDetails = async (editUser, userType) => {
  try {
    await API.graphql({
      query: userType,
      variables: { input: editUser },
      authMode: "API_KEY",
    });
  } catch (err) {
    message.error(err.message);
    throw Error(err.errors[0].message);
  }
};

// create user in Dynamo DB
export const createDataInDynamo = async (userDetails, tableName) => {
  try {
    const response = await API.graphql({
      query: tableName,
      variables: { input: userDetails },
      authMode: "API_KEY",
    });
    return response;
  } catch (err) {
    throw Error(err.errors[0].message);
  }
};

export const getUserByEmail = async (email, userType) => {
  try {
    const response = await API.graphql({
      query: userType,
      variables: {
        filter: {
          email: {
            eq: email,
          },
        },
      },
      authMode: "API_KEY",
    });
    return response;
  } catch (err) {
    message.error(err.errors[0].message);
    throw Error(err.errors[0].message);
  }
};

// list Banquet Management Events Data
export const listBanquetManagementEventsData = async () => {
  try {
    const response = await API.graphql({
      ...graphqlOperation(listBanquetManagementEventsByDate, {
        type: TYPE,
        sortDirection: "DESC",
      }),
    });

    const list = response.data.listBanquetManagementEventsByDate.items;
    const updatedList = list.map((item) => {
      return {
        ...item,
        key: item?.id,
      };
    });
    return updatedList;
  } catch (err) {
    message.error(err.message);
    // throw Error(err.errors[0].message);
  }
};
