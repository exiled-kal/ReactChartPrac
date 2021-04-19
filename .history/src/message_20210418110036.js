import 

export const message = (data) => {
  let message = '';

  message = message + Math.round(d3.csvFormat(data).length / 1024) + 'k';
  message = message + data.length + ' rows\n';
  message = message + data.columns.length + ' columns';

  return message;
};
