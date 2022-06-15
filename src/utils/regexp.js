export const DEFAULT_REGEXP = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  text: /^\w{1,16}$/,
  password:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[1-9])(?=.*[!"$%&'((*+,\-./:;<=>?@[\\\]^_`{}|~])(?!.*[^A-Za-z1-9!"$%&'((*+,\-./:;<=>?@[\\\]^_`{}|~]).{6,16}$/,
};

export const PASSWORD_GUIDE = [
  { id: 1, tip: "Lowercase letter", regex: /(?=[a-z])/ },
  { id: 2, tip: "Uppercase letter", regex: /(?=[A-Z])/ },
  { id: 3, tip: "Number", regex: /(?=[1-9])/ },
  {
    id: 4,
    tip: "Special Character",
    regex: /(?=[!"$%&'((*+,\-./:;<=>?@[\\\]^_`{}|~])/,
  },
  { id: 5, tip: "6-16 characters", regex: /(?=.{6,16})/ },
];
