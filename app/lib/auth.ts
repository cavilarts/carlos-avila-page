import {
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { firebaseAuth } from "./firebase_config";

export async function signIn(email: string, password: string) {
  try {
    return await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (error) {
    return error;
  }
}

export async function signUp(
  email: string,
  password: string
): Promise<UserCredential> {
  try {
    return await createUserWithEmailAndPassword(firebaseAuth, email, password);
  } catch (error) {
    throw error;
  }
}
