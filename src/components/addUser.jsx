import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function AddUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signUp = () => {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          resolve();
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          reject(error); 
        });
    });
  };

  const handleSignUp = async () => {
    try {
      await signUp();
      window.location.href = "/";
    } catch (error) {
      
    }
  };

  return (
    <div className="AddUser">
      <form>
        <div id="usermail">
          <input
            type="mail"
            placeholder="Enter your mail id.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div id="password">
          <input
            type="password"
            placeholder="Enter your password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <div style={{ color: 'red' }}>{error}</div>}

        <Link to="/">
          <button type="button" onClick={handleSignUp}>
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default AddUser;
