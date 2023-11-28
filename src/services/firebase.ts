import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDpJaa0v9MU76K8zEfbnIwE3iaWEGfJ_sY',
  authDomain: 'auth-94133.firebaseapp.com',
  projectId: 'auth-94133',
  storageBucket: 'auth-94133.appspot.com',
  messagingSenderId: '342697333496',
  appId: '1:342697333496:web:cdb10a9bd28cdbb669e10d'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);