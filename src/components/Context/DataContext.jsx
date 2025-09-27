import { Children, createContext, useContext } from "react";
import { sampleData } from "../mockdata/sampleData";
//step 1 - Crreate context
const DataContext = createContext();

//step 2 - create the provider function
//**** *// function data porvider({children}){}
const DataProvider = ({ Children }) => {
  return (
    <DataContext.Provider value={sampleData}>{Children}</DataContext.Provider>
  );
};

// creating custom hoooks
function usaeData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new error("useData must be used within a Data provider");
  }
  return context;
}
export { DataProvider, usaeData };
