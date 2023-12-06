import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";


function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signIn = () => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
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

  const handleSignIn = async () => {
    try {
      await signIn();
      window.location.href = "/home";
    } catch (error) {
      
    }
  };

  return (
    <div className="log-in">
      <div id="heading">
        <h1>Log In</h1>
      </div>

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

        {error && <div style={{ color: "red" }}>{error}</div>}

        <small>
          Don't Have an Account{" "}
          <Link to="/create-user"> Create Account </Link>
        </small>

        <Link to="/home">
          <button onClick={handleSignIn}>
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default LogIn;
