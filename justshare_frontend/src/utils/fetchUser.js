export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("justshareuser") !== "undefined"
      ? JSON.parse(localStorage.getItem("justshareuser"))
      : localStorage.clear();
  return userInfo;
};
