import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Workshop from "./components/Workshop/Workshop";
import { useState, useEffect } from "react";
import Contact from "./components/Contact/Contact";
import BookOnline from "./components/BookOnline/BookOnline";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import Mission from "./components/Mission/Mission";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import SignInModal from "./components/SignInModal/SignInModal";
import * as auth from "./components/utils/auth";
import * as token from "./components/utils/Token";
function App() {
  /*****************************************************************/
  /*                             Modal                             */
  /*****************************************************************/

  const [activeModal, setActiveModal] = useState("");
  const [isSigninModalOpen, setIsSignInModalOpen] = useState(false);

  const closeModal = () => {
    setActiveModal("");
  };

  const handleSignUpModal = () => {
    setActiveModal("signup");
  };

  const handleSignInModal = () => {
    setActiveModal("signin");
  };

  /*****************************************************************/
  /*                              USER                             */
  /*****************************************************************/

  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const userContext = {
    email: "",
    password: "",
    username: "",
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const onStorage = () => setIsLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  /*****************************************************************/
  /*                           Sign Up                             */
  /*****************************************************************/

  const handleSignUpSubmit = async (payload) => {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      mailingAddress,
    } = payload;

    try {
      console.log("Submit Button Working", payload);

      await auth.signUp({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        mailingAddress,
      });
      const data = await auth.signIn({ email, password });
      setIsLoggedIn(true);
      console.log("Sign In Completed", data);
      return data;
    } catch (err) {
      console.error("Failed to create user.", err);
      throw new Error(err?.message || "Failed to create user.");
    }
  };

  /*****************************************************************/
  /*                           Sign In                             */
  /*****************************************************************/

  const handleSignInSubmit = async ({ email, password }) => {
    try {
      const data = await auth.signIn({ email, password });
      setIsLoggedIn(true);
      localStorage.setItem("token", data.token);
      closeModal();
      console.log({ email, password }, "Log in success");
      return data;
    } catch (err) {
      console.error("sign in failed", err);
      throw new Error(err?.message || "Sign in failed");
    }
  };

  /*****************************************************************/
  /*                            Log Out                            */
  /*****************************************************************/

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    console.log("Log out success");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header
          activeModal={activeModal}
          handleSignInModal={handleSignInModal}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
              </>
            }
          ></Route>
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/bookonline" element={<BookOnline />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <Contact />
        <Footer />
      </div>
      <SignUpModal
        closeModal={closeModal}
        activeModal={activeModal}
        handleSignInModal={handleSignInModal}
        handleSignUpSubmit={handleSignUpSubmit}
      />
      <SignInModal
        closeModal={closeModal}
        activeModal={activeModal}
        handleSignUpModal={handleSignUpModal}
        handleSignInSubmit={handleSignInSubmit}
      />
    </div>
  );
}

export default App;
