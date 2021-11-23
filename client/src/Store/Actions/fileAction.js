import axios from "axios";

export const FILESUCCESS = "FILESUCCESS";
export const FILEFAILURE = "FILEFAILURE";

export const fileUpload = async (file) => {
  console.log(file);
  return await axios.post(`${process.env.REACT_APP_API}/createFile`, file);
};
