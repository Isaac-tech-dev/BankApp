// utils/format.ts
export const formatAccountNumber = (accountNumber: string) => {
  return accountNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
};
