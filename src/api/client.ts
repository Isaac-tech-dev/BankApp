const BASE_URL = "https://694af80126e8707720670a3e.mockapi.io/api";

export const loginUser = async (username: string, password: string) => {
  const res = await fetch(`${BASE_URL}/users`);
  const users = await res.json();

  console.log(users);

  return users.find(
    (u: any) => u.username === username && u.password === password
  );
};

export const fetchAccounts = async (userId: number | string) => {
  const res = await fetch(`${BASE_URL}/accounts`); // fetch all accounts
  if (!res.ok) {
    throw new Error("Failed to fetch accounts");
  }

  const accounts = await res.json();
  // Find the account for the logged-in user
  const userAccount = accounts.filter(
    (account: any) => account.userId == userId
  );
  console.log(userAccount);

  return userAccount; // returns first match or undefined
};
