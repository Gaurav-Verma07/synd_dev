/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction } from "react";

export interface DataProps {
//   isLoading: boolean;
//   setIsLoading: Dispatch<SetStateAction<DataProps["isLoading"]>>;
//   imageRef: string;
//   setImageRef: Dispatch<SetStateAction<DataProps["imageRef"]>>;
  allData: string[][];
  setAllData: Dispatch<SetStateAction<DataProps["allData"]>>;
}

const DataContext = React.createContext<DataProps>({
//   isLoading: true,
//   setIsLoading: () => {},
//   imageRef: "",
//   setImageRef: () => {},
  allData: [[""]],
  setAllData: () => {},
});

export default DataContext;
