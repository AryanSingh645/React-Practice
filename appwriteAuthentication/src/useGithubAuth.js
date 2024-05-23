import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

export const useGithubAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const signInWithGithub = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);

    setUser(result.user);
  };

  return {
    user,
    signInWithGithub,
  };
};

