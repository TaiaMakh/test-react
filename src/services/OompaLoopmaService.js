import axios from "axios";

export const getAllOompaLoopma = async (page) => {
  console.log("getting oompas again");
  try {
    const response = await axios.get(
      `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${page}`
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getOneOompaLoopma = async (id) => {
  try {
    const response = await axios.get(
      `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`
    );
    console.log(response);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
