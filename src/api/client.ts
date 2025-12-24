const BASE_URL = "https://694af80126e8707720670a3e.mockapi.io/api";

export const loginUser = async (username: string, password: string) => {
  const res = await fetch(`${BASE_URL}/users`);
  const users = await res.json();

  console.log(users)

  return users.find(
    (u: any) => u.username === username && u.password === password
  );
};

export const fetchAccounts = async (userId: number | string) => {
  const res = await fetch(`${BASE_URL}/accounts?userId=${userId}`);
  console.log(res)
  if (!res.ok) {
    throw new Error("Failed to fetch accounts");
  }
  return res.json();
};
