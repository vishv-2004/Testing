import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import React from "react";
import GoogleLogin from 'react-google-login';
const LoginWihtGoogle = async (credentialResponse) => {
    console.log("this is the response", credentialResponse);
  };

function App() {
  const [files, setFiles] = useState(null);
  const [progressBar, setProgressBar] = useState(0);
  async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        if(!files) return alert("Please select a file");
        for(let i of files){
          formData.append("file", i);
        }
        const resData = await axios.post("https://httpbin.org/post",
          formData,{
            onDownloadProgress:function (data) {
              setProgressBar(data.loaded/data.total*100);
              console.log('this is a progress', data.loaded, data.total);
            }
          });
          console.log('this is the response', resData.data);
  }
 
  return (
    <div>
      {/* <GoogleOAuthProvider
                clientId={`130647083198-lofb5q8se3mir33v1crsdf5a4rahh5mj.apps.googleusercontent.com`}
              >
                <GoogleLogin
                  // type="icon"
                  text="signup_with"
                  onSuccess={async (credentialResponse) => {
                    await LoginWihtGoogle(credentialResponse);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </GoogleOAuthProvider> */}
              <GoogleLogin
      clientId="130647083198-lofb5q8se3mir33v1crsdf5a4rahh5mj.apps.googleusercontent.com"

      buttonText={'LOGIN WITH GOOGLE'}


      onSuccess={LoginWihtGoogle}
      className="GOOGLE"

    />
    </div>
  );
}

export default App;
