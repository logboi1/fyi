import React, {useEffect} from 'react';
import Navigation from './src/Navigation/Navigation';
import TabNavigation from './src/Navigation/TabNavigation';

import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './Firebase/firebase';

const App = () => {
  const [isSignIn, setIsSignIn] = React.useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setIsSignIn(true);
      } else {
        // User is signed out
        setIsSignIn(false);
      }
    });
  }, []);

  if (isSignIn == true) {
    return <TabNavigation />;
  } else {
    return <Navigation />;
  }
};

export default App;
