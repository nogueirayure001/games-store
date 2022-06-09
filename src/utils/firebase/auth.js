import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "./basic-configs";

const auth = getAuth(app);

export async function signUpNewUser(email, password, newProfileValues) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  for (const key in newProfileValues) {
    updateProfile(user, { [key]: newProfileValues[key] });
  }

  return user;
}

export async function SignInUser(email, password) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  return user;
}

export async function SignOutUser() {
  signOut(auth);
}

export function userStateObserver(observerHandler) {
  return onAuthStateChanged(auth, observerHandler);
}

export const SIGNUP_ERRORS = {
  "auth/email-already-in-use":
    "There already exists an account with the given email address",
  "auth/invalid-email": "The email address is not valid",
  "auth/operation-not-allowed": "Operation not allowed",
  "auth/weak-password": "The password is not strong enough",
};
