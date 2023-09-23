import { Table } from "@mantine/core";
import DataContext from "../../context/dataContext";
import { useContext } from "react";
import classes from "./DataPreview.module.css";
const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

const DataPreview = () => {
  const { allData } = useContext(DataContext);

  console.log(allData);

  const rows = allData?.map((row: string[], index: number) => (
    <Table.Tr key={index}>
      {row.map((element: string) => (
        <Table.Td key={element}>{element}</Table.Td>
      ))}
    </Table.Tr>
  ));

  return (
    <Table
      striped
      highlightOnHover
      withTableBorder
      withRowBorders={true}
      className={classes.main}
    >
      <Table.Thead>
        <Table.Tr>
          {allData[0]?.map((element: string) => (
            <Table.Th>{element}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default DataPreview;
