import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import "@mantine/dropzone/styles.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import DataContext from "./context/dataContext";
import Tool from "./pages/Tool/Tool";
import Home from "./pages/Home/Home";
import "./styles/global.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [allData, setAllData] = useState<string[][]>([[""]]);
  const emptyFile: File = new File([], "");
  const [userFile, setUserFile] = useState<File>(emptyFile);
  const [isGenerate, setIsGenerate] = useState<boolean>(false);

  return (
    <DataContext.Provider
      value={{
        allData,
        setAllData,
        userFile,
        setUserFile,
        isGenerate,
        setIsGenerate,
      }}
    >
      <MantineProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tool" element={<Tool />} />
        </Routes>
        <ToastContainer />
      </MantineProvider>
    </DataContext.Provider>
  );
}
