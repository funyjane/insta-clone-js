import axios from "axios";
import jwt_decode from "jwt-decode";

export const createOrGetUser = async (response, addUser) => {
  const decodedToken = jwt_decode(response.credential);
  console.log(decodedToken);
};
