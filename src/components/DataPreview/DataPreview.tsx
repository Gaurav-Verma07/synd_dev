import { Button, Loader, Text } from "@mantine/core";
import DataContext from "../../context/dataContext";
import { useContext } from "react";
import classes from "./DataPreview.module.css";
import DataTable from "../DataTable/DataTable";

const DataPreview = () => {
  const { allData, setIsGenerate, isGenerate, userFile } =
    useContext(DataContext);

  if (allData[0][0] === "") return <></>;

  return (
    <div className={classes.base}>
      <Text c={"grey"} mb={15} fw={600}>
        *{userFile.name}
      </Text>
      <DataTable generatedData={allData} />
      <Button
        className={classes.generatebtn}
        onClick={() => {
          setIsGenerate(true);
        }}
      >
        {isGenerate ? (
          <>
            {" "}
            <Loader color="white" size="sm" mr={10} /> {"  "}Training...
          </>
        ) : (
          "Train model"
        )}
      </Button>
    </div>
  );
};

export default DataPreview;
