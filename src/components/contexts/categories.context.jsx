import { useState, createContext, useEffect } from "react";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCurrentUser: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const values = {categoriesMap}
  return (
    <CategoriesContext.Provider value={values}>
      {children}
    </CategoriesContext.Provider>
  );
};
