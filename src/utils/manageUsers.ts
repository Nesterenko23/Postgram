import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { User } from "../types/user";

export const getCurrentUser = async (uid: string) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as User;
    
  } catch (error) {
    console.log(error);
  }
};
