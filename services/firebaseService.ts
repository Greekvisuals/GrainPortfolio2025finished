import { db, storage, auth } from "../firebaseConfig";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { signInWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth";
import { Project } from "../types";

const PROJECTS_COLLECTION = "projects";
const REAL_ESTATE_COLLECTION = "real-estate-projects";
const MESSAGES_COLLECTION = "messages";

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
    const collectionName = project.isRealEstate ? REAL_ESTATE_COLLECTION : PROJECTS_COLLECTION;
    const docRef = await addDoc(collection(db, collectionName), {
      ...project,
      createdAt: Date.now()
    });
    return { id: docRef.id, ...project };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
};

export const getProjectsFromFirestore = async (isRealEstate: boolean = false): Promise<Project[]> => {
  try {
    const collectionName = isRealEstate ? REAL_ESTATE_COLLECTION : PROJECTS_COLLECTION;
    const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Project));
  } catch (error) {
    console.error(`Error getting ${isRealEstate ? 'real estate' : 'main'} projects:`, error);
    return [];
  }
};

export const addContactMessage = async (data: any) => {
  try {
    await addDoc(collection(db, MESSAGES_COLLECTION), {
      ...data,
      createdAt: Date.now()
    });
    return true;
  } catch (error) {
    console.error("Error saving message:", error);
    return false;
  }
};

export const loginUser = async (email: string, pass: string) => {
  return await signInWithEmailAndPassword(auth, email, pass);
};

export const subscribeToAuthChanges = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
