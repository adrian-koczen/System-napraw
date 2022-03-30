export const checkTokenAuth = () => {
  const token = localStorage.getItem("x-token-auth");
  if (token === null) {
    return false;
  }
};
