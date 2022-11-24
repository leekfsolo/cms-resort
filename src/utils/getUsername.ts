import Config from "configuration";

export const getUsername = () => {
  let username = "";
  const auth = sessionStorage.getItem(Config.storageKey.auth);

  if (auth) {
    username = JSON.parse(auth).username;
  }

  return username;
};
