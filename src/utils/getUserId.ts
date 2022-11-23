import Config from "configuration";

export const getUserId = () => {
  let userId = "";
  const auth = sessionStorage.getItem(Config.storageKey.auth);

  if (auth) {
    userId = JSON.parse(auth).userId;
  }

  return userId;
};
