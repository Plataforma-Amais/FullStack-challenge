export default (date) => {
  const orderDate = new Date(date);
  const month = orderDate.getMonth() + 1;
  const min = 10;
  return [
    `${orderDate.getDate()}/${(month < min) ? `0${month}` : month}`,
    orderDate.getFullYear(),
  ];
};
