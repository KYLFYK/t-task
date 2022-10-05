export const formatAddress = (value: string, length: number = 4) =>
  `${value.substring(0, length + 2)}...${value.substring(
    value.length - length
  )}`;
