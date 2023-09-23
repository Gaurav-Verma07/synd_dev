import { Table } from '@mantine/core';
import DataContext from '../../context/dataContext';
import { useContext } from 'react';
import classes from './DataPreview.module.css';

const DataPreview = () => {
  const { allData } = useContext(DataContext);

  console.log(allData);

  const rows = allData?.map((row: string[], index: number) => (
    <Table.Tr key={index}>
      {row.map((element: string, index: number) => (
        <Table.Td key={index}>{element}</Table.Td>
      ))}
    </Table.Tr>
  ));

  return (
    <Table striped highlightOnHover withTableBorder withRowBorders={true} className={classes.main}>
      <Table.Thead>
        <Table.Tr>
          {allData[0]?.map((element: string, index: number) => (
            <Table.Th key={index}>{element}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default DataPreview;
