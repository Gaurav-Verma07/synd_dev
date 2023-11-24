import { useContext, useEffect, useState } from "react";
import DataContext from "../../context/dataContext";
import classes from "./PretrainedData.module.css";
import {
  Button,
  Divider,
  Group,
  NumberInput,
  Radio,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { toast } from "react-toastify";
import DataTable from "../DataTable/DataTable";
import { adultData, irisData } from "./dataPreview";

const PretrainedData = () => {
  const { pretrainType } = useContext(DataContext);
  const [dataset, setDataset] = useState("");
  const [generatedData, setGeneratedData] = useState<any[][]>([[]]);
  const [preview, setPreview] = useState<any[][]>([[]]);

  const generateHandler = (e: any) => {
    e.preventDefault();
    const n_rows = e.target[0].value;
    try {
      fetch(`http://127.0.0.1:8000/sample/?model=${dataset}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          n_rows: n_rows,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result?.error) {
            toast.error(result?.error);
          } else {
            setGeneratedData(result?.data);
            console.log("sample", result?.data.slice(0, 6));
            toast.success("Data generated successfully");
          }
        })
        .catch((e: Error) => {
          toast.error(e.message);
        });
    } catch (e: any) {
      console.log(e);
    }
  };

  const downloadHandler = () => {
    let csvContent =
      "data:text/csv;charset=utf-8," +
      generatedData.map((e) => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${dataset}_synd.csv`);
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
  };

  useEffect(() => {
    if (dataset == "adult") setPreview(adultData);
    else if (dataset === "") setPreview([[]]);
    else setPreview(irisData);
  }, [dataset]);

  if (pretrainType === "") {
    return <></>;
  }

  return (
    <>
      <Divider />
      <section className={classes.section}>
        <div className={classes.dataset}>
          <Radio.Group
            value={dataset}
            onChange={setDataset}
            className={classes.radiogroup}
            required
            withAsterisk
          >
            <Text c="grey">Select dataset model to be generated</Text>
            <Group mt={10}>
              <Radio value="adult" color="grape" size="md" label="Adult" />
              <Radio value="company" color="grape" size="md" label="Company" />
              <Radio value="iris" color="grape" size="md" label="iris" />
              <Radio
                value="breast_cancer"
                color="grape"
                size="md"
                label="Breast cancer"
              />
              <Radio
                value="credit_card"
                color="grape"
                size="md"
                label="Credit card"
              />
            </Group>
          </Radio.Group>
        </div>
        <div className={classes.preview}>
          <Text c="grey" size="sm" mb={5} >{dataset} dataset preview:</Text>
          <DataTable generatedData={preview} />
        </div>
        <div className={classes.rows}>
          <form className={classes.inputblock} onSubmit={generateHandler}>
            <TextInput
              w={400}
              label="Enter rows"
              name="rows"
              description="Total number of rows to be generated"
            />
            <Button type="submit" ml={20}>
              Generate
            </Button>
            <Button
              className={classes.downloadbutton}
              onClick={downloadHandler}
              disabled={generatedData[0]?.length === 0}
              ml={20}
            >
              Download data
            </Button>
          </form>
        </div>
        <DataTable generatedData={generatedData} />
      </section>
    </>
  );
};

export default PretrainedData;
