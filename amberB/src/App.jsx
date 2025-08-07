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
function App() {
  const [activeModal, setActiveModal] = useState("");
  const closeModal = () => setActiveModal("");

  /*****************************************************************/
  /*                          Array of Img                         */
  /*****************************************************************/

  /*****************************************************************/
  /*                          Array of Img                         */
  /*****************************************************************/

  return (
    <div className="page">
      <div className="page__content">
        <Header activeModal={activeModal} closeModal={closeModal} />

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
    </div>
  );
}

export default App;
