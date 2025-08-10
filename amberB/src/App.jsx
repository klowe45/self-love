import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Workshop from "./components/Workshop/Workshop";
import { act, useState } from "react";
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

  const handleSignUpSubmit = ({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    mailingAddress,
  }) => {
    console.log("Submit button working", {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      mailingAddress,
    });

    auth.signUp(firstName, lastName, password, phoneNumber, mailingAddress);
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
      />
      <SignInModal
        closeModal={closeModal}
        activeModal={activeModal}
        handleSignUpModal={handleSignUpModal}
      />
    </div>
  );
}

export default App;
