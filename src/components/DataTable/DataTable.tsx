import { Table } from "@mantine/core";
import classes from "./DataTable.module.css";

const DataTable = ({generatedData}: any) => {
  const rows = generatedData
    ?.slice(1, 11)
    .map((row: string[], index: number) => (
      <Table.Tr key={index}>
        {row.map((element: string, index: number) => (
          <Table.Td key={index}>{element}</Table.Td>
        ))}
      </Table.Tr>
    ));

  return (
    <Table
      striped
      highlightOnHover
      withTableBorder
      withRowBorders={true}
      className={classes.table}
    >
      <Table.Thead>
        <Table.Tr>
          {generatedData[0]?.map((element: string, index: number) => (
            <Table.Th key={index}>{element}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default DataTable;
