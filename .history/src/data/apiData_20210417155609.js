import axios from 'axios';

const baseUrl =
  'https://raw.githubusercontent.com/exiled-kal/csvprac/main/data.json';

export const getData = async () => {
  try {
    const {data} = await axios.get(baseUrl);
    return data;
  } catch (error) {
    throw error;
  }
};

// export const getPieData = async () => {
//   try {
//     const {data} = await axios.get(baseUrl);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
