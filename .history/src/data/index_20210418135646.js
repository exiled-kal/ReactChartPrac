
import axios from 'axios';

const url = 'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data.csv';

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: {confirmed, recovered, deaths, lastUpdate},
    } = await axios.get(changeableUrl);

    // since we export fetchData we r not using console.log for Promise
    // console.log(response);
    return {confirmed, recovered, deaths, lastUpdate};
  } catch (error) {
    console.log(error);
  }
};