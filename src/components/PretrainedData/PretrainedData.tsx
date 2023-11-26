import { useContext, useEffect, useState } from "react";
import DataContext from "../../context/dataContext";
import classes from "./PretrainedData.module.css";
import { Button, Divider, Group, Radio, Text, TextInput } from "@mantine/core";
import { toast } from "react-toastify";
import DataTable from "../DataTable/DataTable";
import { adultData, energyData, irisData, stockData } from "./dataPreview";
import { config } from "../../utils/config";
const tabularDataset = [
  {
    value: "adult",
    label: "Adult",
  },
  {
    value: "iris",
    label: "Iris",
  },
  {
    value: "company",
    label: "Company",
  },
  {
    value: "breast_cancer",
    label: "Breast Cancer",
  },
  {
    value: "credit_card",
    label: "Credit card",
  },
];
const timeseriesDataset = [
  {
    value: "stock_data",
    label: "Stock Data",
  },
  {
    value: "energy_data",
    label: "Energy Data",
  },
  {
    value: "mutual_funds",
    label: "Mutual Funds",
  },
  {
    value: "weather",
    label: "Weather",
  },
];

const PretrainedData = () => {
  const { pretrainType } = useContext(DataContext);
  const [dataset, setDataset] = useState("");
  const [generatedData, setGeneratedData] = useState<any[][]>([[]]);
  const [preview, setPreview] = useState<any[][]>([[]]);

  const generateHandler = (e: any) => {
    e.preventDefault();
    const n_rows = e.target[0].value;
    try {
      fetch(`${config.SERVER_PATH}/data_generation/sample/?model=${dataset}`, {
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
          if (result?.error) {
            toast.error(result?.error);
          } else {
            setGeneratedData(result?.data);
            toast.success("Data generated successfully");
          }
        })
        .catch((e: Error) => {
          toast.error(e.message);
        });
    } catch (e: any) {
      toast.error(e);
    }
  };
  const downloadHandler = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      generatedData.map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${dataset}_synd.csv`);
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
  };

  useEffect(() => {
    if (dataset === "adult") setPreview(adultData);
    else if (dataset === "iris") setPreview(irisData);
    else if (dataset === "stock_data") setPreview(stockData);
    else if (dataset === "energy_data") setPreview(energyData);
    else setPreview([[]]);
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
              {(pretrainType === "tabular"
                ? tabularDataset
                : timeseriesDataset
              ).map((set: { value: string; label: string }, index: number) => (
                <Radio
                  key={index}
                  value={set.value}
                  color="grape"
                  size="md"
                  label={set.label}
                />
              ))}
            </Group>
          </Radio.Group>
        </div>
        <div className={classes.preview}>
          <Text c="grey" size="sm" mb={5}>
            {dataset} dataset preview:
          </Text>
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
