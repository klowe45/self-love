import React from "react";

export const ServicesCreatedContext = React.createContext({
  serviceData: [],
  servicesLoading: false,
  servicesError: "",
  getAllServices: () => {},
});
