import {
  collection,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import React, { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { userConverter } from "src/utils/userConverter";
import { auth, database } from "src/config/firebaseConfig";

type User = {
  name: string;
  uid: string;
  role: "admin" | "writer";
  dateCreated: string;
  id: string;
  photoURL: string;
  ref: DocumentReference<DocumentData>;
  notifications: {
    message: string;
    type: "failure" | "success";
    docId: string;
    dateCreated: string;
  }[];
};
type UserContextType = {
  user: User | null | undefined;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userData] = useAuthState(auth);
  const userRef = collection(database, "users").withConverter(userConverter);
  const [data] = useCollectionData(userRef);
  const user =
    data && userData && data.filter((doc) => doc.uid === userData.uid)[0];

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
