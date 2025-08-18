import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Workshop from "./components/Workshop/Workshop";
import { useState } from "react";
import Contact from "./components/Contact/Contact";
import BookOnline from "./components/BookOnline/BookOnline";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import SignInModal from "./components/SignInModal/SignInModal";
import * as auth from "../src/components/utils/auth";
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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*****************************************************************/
  /*                           Sign Up                             */
  /*****************************************************************/

  const handleSignUpSubmit = async (payload) => {
    const { firstName, lastName, password, phoneNumber, mailingAddress } =
      payload;

    try {
      console.log("Submit Button Working", payload);

      await auth.signUp({
        firstName,
        lastName,
        password,
        phoneNumber,
        mailingAddress,
      });
      const data = await auth.signIn({ email, password });
      console.log("Sign In Completed", data);
    } catch (err) {
      console.error("Failed to create user.", err);
      throw new Error(err?.message || "Failed to create user.");
    }
  };

  /*****************************************************************/
  /*                           Sign In                             */
  /*****************************************************************/

  const handleSignInSubmit = async () => {
    try {
      console.log({ email, password });
      await auth.signIn({ email, password });
      const data = await auth.signIn(email, password);

      localStorage.setItem("token", data.token);
      console.log("signed in comeplete", data);
    } catch (err) {
      console.error("sign in failed", err);
    }
  };
  return (
    <div className="page">
      <div className="page__content">
        <Header
          activeModal={activeModal}
          handleSignInModal={handleSignInModal}
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
