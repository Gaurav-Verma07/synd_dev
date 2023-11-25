import React, { Dispatch, SetStateAction } from "react";

export interface DataProps {
  //   isLoading: boolean;
  //   setIsLoading: Dispatch<SetStateAction<DataProps["isLoading"]>>;
  //   imageRef: string;
  //   setImageRef: Dispatch<SetStateAction<DataProps["imageRef"]>>;
  allData: string[][];
  setAllData: Dispatch<SetStateAction<DataProps["allData"]>>;
  userFile: File;
  setUserFile: Dispatch<SetStateAction<DataProps["userFile"]>>;
  isGenerate: boolean;
  setIsGenerate: Dispatch<SetStateAction<DataProps["isGenerate"]>>;
  pretrainType: string;
  setPretrinType: Dispatch<SetStateAction<DataProps["pretrainType"]>>;
}

const emptyFile: File = new File([], "");

const DataContext = React.createContext<DataProps>({
  //   isLoading: true,
  //   setIsLoading: () => {},
  //   imageRef: "",
  //   setImageRef: () => {},
  allData: [[""]],
  setAllData: () => {},
  userFile: emptyFile,
  setUserFile: () => {},
  isGenerate: false,
  setIsGenerate: () => {},
  pretrainType: "",
  setPretrinType: () => {},
});

export default DataContext;
