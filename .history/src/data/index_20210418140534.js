import axios from 'axios';

const url =
  'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data.csv';

export const fetchData = async () => {
  try {
    const {data} = await axios.get(`${url}`);

    const modifiedData = data.map((Data) => ({
      StartDateTime: Data.StartDateTime,
      MTBF: Data.MTBF,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
