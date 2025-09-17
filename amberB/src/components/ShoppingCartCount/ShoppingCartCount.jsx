import React, { useContext, useEffect, useState } from "react";
import "./ShoppingCartCount.css";
import { ServicesCreatedContext } from "../../Context/ServicesCreatedContext";

function ShoppingCartCount() {
  const { serviceData } = useContext(ServicesCreatedContext);
  const [serviceCount, setServiceCount] = useState(0);

  useEffect(() => {
    const count = Array.isArray(serviceData) ? serviceData.length : 0;
    setServiceCount(count);
  }, [serviceData]);

  return (
    <div className="shopping">
      <p className="shopping__number">{serviceCount}</p>
    </div>
  );
}

export default ShoppingCartCount;

//add function to filter out the available sessions
