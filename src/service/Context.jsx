import axios from "axios";
import { createContext, useEffect, useState } from "react";
import React from 'react'

export const appContext = createContext()


function AppContextProvider({ children }) {
  const [searchFilter, setSearchFilter] = useState([])
  const [allLms, setAllLms] = useState([])

  // get all subject
  const getData = async () => {
    try {
      const result = await axios.get("https://trogon.info/interview/php/api/subjects.php");
      console.log(result.data); // Inspect the data structure
      setAllLms(result.data); // Assuming 'result.data'  in allLms
      setSearchFilter(result.data); // Assuming 'result.data'  in searchFilter for filter
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData()
  }, [])

  const value = {
    searchFilter, setSearchFilter,
    allLms, setAllLms,
  }
  return (
    <>
      <appContext.Provider value={value}>
        {children}
      </appContext.Provider>
    </>
  )
}

export default AppContextProvider
