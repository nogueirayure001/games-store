import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "./basic-configs";

const auth = getAuth(app);
auth.useDeviceLanguage();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

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

export async function signInWithGooglePopUp() {
  const { user } = await signInWithPopup(auth, googleProvider);

  return user;
}

export const FIREBASE_SIGNUP_ERRORS = {
  "auth/email-already-in-use":
    "There already exists an account with the given email address",
  "auth/invalid-email": "The email address is not valid",
  "auth/operation-not-allowed": "Operation not allowed",
  "auth/weak-password": "The password is not strong enough",
};

export const FIREBASE_SIGNIN_ERRORS = {
  "auth/invalid-email": "Wrong e-mail or password",
  "auth/user-disabled": "This user has been disabled",
  "auth/user-not-found": "No such user found",
  "auth/wrong-password": "Wrong e-mail or password",
};

export const FIREBASE_POPUP_SIGNIN_ERRORS = {
  "auth/account-exists-with-different-credential":
    "E-mail signed up with different credentials. Try other login method",
  "auth/auth-domain-config-required": "Sorry, could not log you in",
  "auth/cancelled-popup-request": "Sorry, could not log you in",
  "auth/operation-not-allowed": "Sorry, could not log you in",
  "auth/operation-not-supported-in-this-environment":
    "Sorry, could not log you in",
  "auth/popup-blocked": "Pop-up blocked. Unblock pop-ups and try again",
  "auth/popup-closed-by-user": "Pop-up closed by user before logging in",
  "auth/unauthorized-domain": "Sorry, could not log you in",
};
