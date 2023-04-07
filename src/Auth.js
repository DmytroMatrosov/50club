const ValidCreds = {
  vorname: "Roberto",
  nachname: "Ferraro",
};

const isCredsValid = ({ nachname, vorname }) => {
  return nachname === ValidCreds.nachname && vorname === ValidCreds.vorname;
};

export const auth = ({ person, setAuth }) => {
  if (isCredsValid(person)) {
    setAuth(true);
  }
};
