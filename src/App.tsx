import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import "@mantine/dropzone/styles.css";
import DropZone from "./components/Dropzone/Dropzone";
import { HeaderMenu } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import DataPreview from "./components/DataPreview/DataPreview";
import { useState } from "react";
import DataContext from "./context/dataContext";

export default function App() {
  const [allData, setAllData] = useState<string[][]>([[""]]);

  return (
    <DataContext.Provider value={{ allData, setAllData }}>
      <MantineProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderMenu />
                <DropZone />
                <DataPreview />
              </>
            }
          />
          <Route
            path="/tool"
            element={
              <>
                <DropZone />
              </>
            }
          />
        </Routes>
      </MantineProvider>
    </DataContext.Provider>
  );
}
