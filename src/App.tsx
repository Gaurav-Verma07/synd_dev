import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import '@mantine/dropzone/styles.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import DataContext from './context/dataContext';
import Tool from './pages/Tool/Tool';
import Home from './pages/Home/Home';

export default function App() {
  const [allData, setAllData] = useState<string[][]>([['']]);

  return (
    <DataContext.Provider value={{ allData, setAllData }}>
      <MantineProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tool" element={<Tool />} />
        </Routes>
      </MantineProvider>
    </DataContext.Provider>
  );
}
