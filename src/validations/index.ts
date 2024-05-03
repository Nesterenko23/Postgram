export const nameRules = {
  maxLength: {
    value: 25,
    message: "This field cannot be more than 25 characters",
  },
};

export const usernameRules = {
  required: {
    value: true,
    message: "Username is required",
  },
  minLength: {
    value: 6,
    message: "The length should be between 6 and 20 characters inclusive",
  },
  maxLength: {
    value: 20,
    message: "The length should be between 6 and 20 characters inclusive",
  },
};

export const emailRules = {
  required: {
    value: true,
    message: "Email is required",
  },
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Wrong email format",
  },
};

export const passwordRules = {
  required: {
    value: true,
    message: "Password is required",
  },
  minLength: {
    value: 8,
    message: "Password cannot be less than 8 characters",
  },
};
