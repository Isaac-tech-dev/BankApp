// utils/format.ts
export const formatAccountNumber = (accountNumber: string) => {
  return accountNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
};

export const getGreeting = ()=> {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

export const getCurrencySymbol = (currency: string): string => {
  switch (currency.toUpperCase()) {
    case "NGN":
      return "₦"; // Naira symbol
    case "USD":
      return "$"; // US Dollar
    case "EUR":
      return "€"; // Euro
    case "GBP":
      return "£"; // Pound Sterling
    case "JPY":
      return "¥"; // Japanese Yen
    default:
      return currency; // fallback to showing the code itself
  }
};
