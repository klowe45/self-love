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
import AddServices from "./components/AddServices/AddServices";
import LearnGrowLove from "./components/LearnGrowLove/LearnGrowLove";
import { ServicesCreatedContext } from "./Context/ServicesCreatedContext";

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
  const [isAdmit, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!auth.getToken());
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
      closeModal();
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

  /*****************************************************************/
  /*                            Services                           */
  /*****************************************************************/

  const handleCreateServiceSubmit = async ({
    serviceTitle,
    subtitle,
    price,
    description,
    image,
  }) => {
    const data = await auth.createService({
      serviceTitle,
      subtitle,
      price,
      description,
      image,
    });
    console.log(data);
    return data;
  };

  //get service by ID
  const handleGetService = async (id) => {
    try {
      if (!id) throw new Error("Service ID id required.");
      const data = await auth.getServiceById(id);
      return data;
    } catch (err) {
      console.error("Failed to fetch service:", err);
    }
  };

  //get all services
  const [serviceData, setServiceData] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(false);
  const [servicesError, setServicesError] = useState("");
  const [bookedServices, setBookedServices] = useState([]);

  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    try {
      setServicesLoading(true);
      setServicesError("");

      const response = await auth.getServices();

      const services = Array.isArray(response)
        ? response
        : Array.isArray(response?.services)
        ? response.services
        : [];

      setServiceData(services ?? []);
    } catch (err) {
      console.error("Failed to get all Services", err);
      console.log("Error details:", {
        message: err?.message,
        status: err?.status,
        data: err?.data,
      });
      setServicesError(err?.message || "Failed to get all services");
      setServiceData([]);
    } finally {
      setServicesLoading(false);
    }
  };

  return (
    <div className="page">
      <ServicesCreatedContext.Provider
        value={{
          serviceData,
          servicesLoading,
          servicesError,
          getAllServices,
          bookedServices,
        }}
      >
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
            <Route
              path="/bookonline"
              element={<BookOnline serviceData={serviceData} />}
            />
            <Route
              path="/addservice"
              element={
                <AddServices submitService={handleCreateServiceSubmit} />
              }
            />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
          <Mission />
          <Contact />
          <LearnGrowLove />
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
      </ServicesCreatedContext.Provider>
    </div>
  );
}

export default App;
