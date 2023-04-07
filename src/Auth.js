const ValidCreds = {
  name: "Roberto",
  vorname: "Ferraro",
};

const isCredsValid = ({ name, vorname }) => {
  return name === ValidCreds.name && vorname === ValidCreds.vorname;
};

export const auth = ({ person, setAuth }) => {
  if (isCredsValid(person)) {
    setAuth(true);
  }
};
