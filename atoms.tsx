import {atom} from 'recoil';

export const darkModeAtom = atom<boolean>({
    key: "darkMode",
    default: false,
});

export const showLoginFormAtom = atom({
    key: "showLoginFormAtom",
    default: true, // default to showing login form
  });

export const stepState = atom<number>({
  key: "stepState",
  default: 1,
});

export const formDataAtom = atom({
  key: 'formData',
  default: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    date: '',
    month: '',
    year: '',
  },
});
