import { Auth } from "aws-amplify";

// this function returns the JWT token
export const getJWT = async () => {
  try {
    const userCurrentSession = await Auth.currentSession();
    const accessToken = userCurrentSession.getAccessToken();
    const JWTvalue = accessToken.getJwtToken();
    return JWTvalue;
  } catch (error) {
    throw Error(error.message);
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
};

export const convertToAWSTime = (isoTimestamp) => {
  const date = new Date(isoTimestamp);
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};
