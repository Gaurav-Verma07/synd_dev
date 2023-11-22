import { Button, Loader, Table, Text, Title } from "@mantine/core";
import DataContext from "../../context/dataContext";
import { useContext } from "react";
import classes from "./DataPreview.module.css";

const DataPreview = () => {
  const { allData, setIsGenerate , isGenerate, userFile} = useContext(DataContext);

  console.log(allData);
  if(allData[0][0]==='')
  return <></>;

  const rows = allData?.slice(0, 5).map((row: string[], index: number) => (
    <Table.Tr key={index}>
      {row.map((element: string, index: number) => (
        <Table.Td key={index}>{element}</Table.Td>
      ))}
    </Table.Tr>
  ));


  return (
    <div className={classes.base}>
      <Title variant="h6" mb={5} c={"#777"} fw={300} >Data preview</Title>
      <Text c={"grey"} mb={15} fw={600} >*{userFile.name}</Text>
      <Table
        striped
        highlightOnHover
        withTableBorder
        withRowBorders={true}
        className={classes.main}
      >
        <Table.Thead>
          <Table.Tr>
            {allData[0]?.map((element: string, index: number) => (
              <Table.Th key={index}>{element}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Button className={classes.generatebtn} onClick={()=>{
        setIsGenerate(true)
      }} >{ isGenerate ? <> <Loader color="white" size="sm" mr={10} /> {'  '}Training...</> :'Train model'}</Button>
    </div>
  );
};

export default DataPreview;
