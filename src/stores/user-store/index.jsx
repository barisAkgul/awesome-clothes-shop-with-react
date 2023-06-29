import "firebase/auth";
import { auth } from "@helpers/functions/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const createUserStore = (set) => ({
  user: null,
  error: null,
  isLoading: true,

  signIn: async (email, password) => {
    set({ isLoading: true });

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const user = cred.user;
      set({ user });
    } catch (error) {
      set({ error: error.message });
    }

    set({ isLoading: false });
  },

  signUp: async (name, email, password) => {
    set({ isLoading: true });

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, {
        displayName: name,
      });
    } catch (error) {
      set({ error: error.message });
    }

    set({ isLoading: false });
  },
  //Firebase Authentication'da kullanıcının çıkış yapmasını sağlar.
  signOut: async () => {
    set({ isLoading: true });

    try {
      await auth.signOut();
      set({ user: null });
    } catch (error) {
      console.log("Logout error:", error);
    }
    set({ isLoading: false });
  },
  //Firebase Authentication'daki kullanıcı değiştiğinde tetiklenir.
  onAuthStateChanged: () => {
    auth.onAuthStateChanged((user) => {
      set({ user, isLoading: false });
    });
  },
});
