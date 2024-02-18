import { useContext, useEffect, useState } from "react";
import DataContext from "../../context/dataContext";
import { toast } from "react-toastify";
import classes from "./GeneratedData.module.css";
import { Button, Divider, Loader, TextInput } from "@mantine/core";
import DataTable from "../DataTable/DataTable";
import { config } from "../../utils/config";

const GeneratedData = () => {
  const { userFile, isGenerate, setIsGenerate } = useContext(DataContext);
  const [isTrained, setIsTrained] = useState<boolean>(false);
  const [generatedData, setGeneratedData] = useState<any[][]>([[]]);
  const fileName = userFile.name.replace(/\.[^/.]+$/, "").toLowerCase();
  const [isLoading, setIsLoading]= useState<boolean>(false);
  const [uuid, setUUID] = useState<number>();
  useEffect(() => {
    if (isGenerate) {
      const data = new FormData();
      data.append("file", userFile);
      const utime = new Date().valueOf();
      setUUID(utime);
      data.append("name", `${fileName}_${utime}`);
      fetch(`${config.SERVER_PATH}/data_generation/file/`, {
        method: "POST",
        body: data,
      })
        .then((data) => {
          return data.json();
        })
        .then(() => {
          setIsGenerate(false);
          setIsTrained(true);
          toast.success("Model trained successfully");
        })
        .catch((error) => {
          toast.error(error);
          setIsGenerate(false);
        });
    }
  }, [isGenerate]);

  const generateHandler = (e: any) => {
    e.preventDefault();
    const n_rows = e.target[0].value;
    fetch(`${config.SERVER_PATH}/data_generation/generate/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        n_rows: n_rows,
        model_name: `${fileName}_${uuid}`,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setGeneratedData(result?.res);
        toast.success("Data generated successfully");
      })
      .catch((e: Error) => {
        toast.error(e.message);
      });
  };

  const downloadHandler = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      generatedData.map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${fileName}_synd.csv`);
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
  };

  const downloadReportHandler = () => {
    setIsLoading(true);
    fetch(`${config.SERVER_PATH}/data_generation/report/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ file_name: `${fileName}_${uuid}` }),
    })
      .then((response) => {
        if (!response.ok) {
          toast.error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(new Blob([blob]));
        link.setAttribute("download", "generated_report.pdf");
        document.body.appendChild(link);

        // Trigger the click event to start the download
        link.click();

        // Remove the link element
        document.body.removeChild(link);
        setIsLoading(false);
      })
      .catch((error: Error) => {

        toast.error(error.message);
        setIsLoading(false);
      });
  };

  if (isGenerate || !isTrained) return <></>;

  return (
    <section className={classes.section}>
      <Divider />
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
          disabled={generatedData[0].length === 0}
        >
          Download data
        </Button>
      </form>
      <DataTable generatedData={generatedData} />
      <Button mt={20} onClick={downloadReportHandler}>{isLoading?<>Getting report...<Loader c="white"/></> :'Download report'}</Button>
    </section>
  );
};
export default GeneratedData;
