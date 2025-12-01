import { db, storage, auth } from "../firebaseConfig";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { signInWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth";
import { Project } from "../types";

const PROJECTS_COLLECTION = "projects";

export const uploadVideoToStorage = async (file: File): Promise<string> => {
  try {
    const fileName = `${Date.now()}-${file.name}`;
    const storageRef = ref(storage, `videos/${fileName}`);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  } catch (error) {
    console.error("Error uploading video:", error);
    throw error;
  }
};

export const addProjectToFirestore = async (project: Omit<Project, "id">): Promise<Project> => {
  try {
    const docRef = await addDoc(collection(db, PROJECTS_COLLECTION), {
      ...project,
      createdAt: Date.now()
    });
    return { id: docRef.id, ...project };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
};

export const getProjectsFromFirestore = async (): Promise<Project[]> => {
  try {
    const q = query(collection(db, PROJECTS_COLLECTION), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Project));
  } catch (error) {
    console.error("Error getting projects:", error);
    // Return empty array instead of throwing to allow UI to render even if permission denied initially
    return [];
  }
};

export const loginUser = async (email: string, pass: string) => {
  return await signInWithEmailAndPassword(auth, email, pass);
};

export const subscribeToAuthChanges = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};