import React from 'react';
import useGithubAuth from './useGithubAuth';

function App() {
    const {user, signInWithGithub} = useGithubAuth();
    if (user) {
        return <div>You are logged in as {user.displayName}.</div>;
      } else {
        return <button onClick={signInWithGithub}>Sign in with GitHub</button>;
      }
}

export default App



