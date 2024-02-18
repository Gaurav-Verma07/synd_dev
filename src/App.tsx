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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PretrainedModel from "./pages/PretrainedModel/PretrainedModel";
import DataTimeLine from "./components/DataTimeLine/DataTimeLine";
import MainTool from "./components/MainTool/MainTool";

export default function App() {
  const [allData, setAllData] = useState<string[][]>([[""]]);
  const emptyFile: File = new File([], "");
  const [userFile, setUserFile] = useState<File>(emptyFile);
  const [isGenerate, setIsGenerate] = useState<boolean>(false);
  const [pretrainType, setPretrinType] = useState<string>("");

  return (
    <DataContext.Provider
      value={{
        allData,
        setAllData,
        userFile,
        setUserFile,
        isGenerate,
        setIsGenerate,
        pretrainType,
        setPretrinType,
      }}
    >
      <MantineProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tool" element={<Tool />}>
            <Route path="dashboard" element={<DataTimeLine />}></Route>
            <Route path="project" element={<MainTool />}></Route>
            <Route path="activity" element={<div>Coming soon...</div>}></Route>
            <Route path="profile" element={<div>Coming soon...</div>}></Route>
          </Route>
          <Route path="/pretrained-model" element={<PretrainedModel />} />
        </Routes>
        <ToastContainer />
      </MantineProvider>
    </DataContext.Provider>
  );
}

// Regarding plots, visit:
// https://colab.research.google.com/drive/1K2nkLISxEf7US0Xfzvzwt4d2AjCnl2Et#scrollTo=BUp2U7tcD2wm
