import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import axios from 'axios';  // Cần cài axios để gửi request đến server

const CLIENT_ID = '973247984258-riadtumd7jcati9d9g9ip47tuqfqdkhc.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAp8wzduKw5P30-B0hUnGD1qiuuj73L8qs';
const API_BASE_URL = 'http://localhost:4200';  // Thay thế bằng URL của bạn

function GoogleAuth({ onLogin }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const initClient = () => {
      gapi.load('client:auth2', () => {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: 'email'
        }).then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          setIsLoggedIn(authInstance.isSignedIn.get());
          authInstance.isSignedIn.listen(setIsLoggedIn);
        }).catch(error => {
          console.error('Error initializing Google API client', error);
        });
      });
    };

    initClient();
  }, []);

  const handleLogin = async () => {
    try {
      const authInstance = gapi.auth2.getAuthInstance();
      const user = await authInstance.signIn();
      const profile = user.getBasicProfile();
      const email = profile.getEmail();
    
      
      const response = await axios.post(`${API_BASE_URL}/api/check-mail`, { email });
      const userExists = response.data.exists;

      if (!userExists) {
        await axios.post(`${API_BASE_URL}/api/customers`, {
          username: profile.getName(),
          email: profile.getEmail(),
          images: profile.getImageUrl(),
          role: 'user',
          create_date: new Date().toISOString()
        });
      }
      if (onLogin) {
        onLogin({
          username: profile.getName(),
          email: profile.getEmail(),
          images: profile.getImageUrl(),
          role: 'user',
          create_date: new Date().toISOString()
        });
      
      }

    } catch (error) {
      console.error('Error during sign-in', error);
    }
  };

  const handleLogout = async () => {
    try {
      const authInstance = gapi.auth2.getAuthInstance();
      await authInstance.signOut();
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error during sign-out', error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
      ) : (
        <i className="bi bi-google" onClick={handleLogin}></i>
      )}
    </div>
  );
}

export default GoogleAuth;
