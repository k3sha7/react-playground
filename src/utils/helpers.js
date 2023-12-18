export const formatDate = (date) => new Date(date).toString().slice(4, 15);

export const shortenAddress = (address) =>
  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
