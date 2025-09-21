import "./App.css";
//react imports
import { Route, Routes } from "react-router-dom";
//imported sections
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import BookOnline from "./components/BookOnline/BookOnline";
import Mission from "./components/Mission/Mission";
import Contact from "./components/Contact/Contact";
import LearnGrowLove from "./components/LearnGrowLove/LearnGrowLove";
import Footer from "./components/Footer/Footer";
import AddServices from "./components/AddServices/AddServices";
import Workshop from "./components/Workshop/Workshop";
import FilterServices from "./components/FilterServices/FilterServices";
import { useState, useEffect } from "react";
//auth
import * as auth from "./components/utils/auth";
import * as token from "./components/utils/Token";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
//context
import { ServicesCreatedContext } from "./Context/ServicesCreatedContext";
//imported modals
import DeleteCardModal from "./components/DeleteCardModal/DeleteCardModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import SignInModal from "./components/SignInModal/SignInModal";
import EditServiceCardModal from "./components/EditServiceCardModal/EditServiceCardModal";
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

  const handleDeleteCardModal = () => {
    setActiveModal("deleteCard");
  };

  const handleEditCardModal = () => {
    setActiveModal("editServiceCard");
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

  //edit service cards
  const [updateServiceLoading, setUpdateServiceLoading] = useState(false);
  const [updatedService, setUpdatedService] = useState({});
  const [updateServiceError, setUpdateServiceError] = useState("");
  const [currentServiceCard, setCurrentServiceCard] = useState();

  const updateServiceCardSubmit = async (serviceId, formData) => {
    try {
      setUpdateServiceLoading(true);
      setUpdateServiceError("");

      const response = await auth.updateServiceCard(serviceId, formData);
      console.log(response);
      setUpdatedService(response.service || {});

      // Refresh the services list to show updated data
      await getAllServices();

      return response;
    } catch (err) {
      console.error("Failed to update service", err);
      console.log("Error details", {
        message: err?.message,
        status: err?.status,
        data: err?.data,
      });
      setUpdateServiceError(err?.message || "Failed to update service");
      throw err;
    } finally {
      setUpdateServiceLoading(false);
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
            <Route
              path="/filteredServices"
              element={
                <FilterServices
                  deleteCardModal={handleDeleteCardModal}
                  editCardModal={handleEditCardModal}
                />
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
        <DeleteCardModal closeModal={closeModal} activeModal={activeModal} />
        <EditServiceCardModal
          closeModal={closeModal}
          activeModal={activeModal}
          updateServiceCardSubmit={updateServiceCardSubmit}
        />
      </ServicesCreatedContext.Provider>
    </div>
  );
}

export default App;
