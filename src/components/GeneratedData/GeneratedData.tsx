import { SyntheticEvent, useContext, useEffect, useState } from "react";
import DataContext from "../../context/dataContext";
import { toast } from "react-toastify";
import classes from "./GeneratedData.module.css";
import { Button, Divider, Input, Table, TextInput } from "@mantine/core";
import DataTable from "../DataTable/DataTable";

const GeneratedData = () => {
  const { userFile, isGenerate, setIsGenerate } = useContext(DataContext);
  const [isTrained, setIsTrained] = useState<boolean>(false);
  const [generatedData, setGeneratedData] = useState<any[][]>([[]]);
  const fileName= userFile.name.replace(/\.[^/.]+$/, "").toLowerCase();
  const [uuid, setUUID]= useState<number>();
  useEffect(() => {
    if (isGenerate) {
      console.log("generating");
      const data = new FormData();
      data.append("file", userFile);
      const utime= new Date().valueOf();
      setUUID(utime)
      data.append("name", `${fileName}_${utime}`)
      fetch("http://127.0.0.1:8000/file/", {
        method: "POST",
        body: data,
      })
        .then((data) => {
          // console.log(data.json());
          // console.log("model trained");
          return data.json();
        })
        .then((res) => {
          console.log(res);
          setIsGenerate(false);
          setIsTrained(true);
          toast.success("Model trained successfully");
        })
        .catch((error) => {
          console.log(error);
          setIsGenerate(false);
        });
    }
  }, [isGenerate]);

  const generateHandler = (e: any) => {
    e.preventDefault();
    const n_rows = e.target[0].value;
    fetch("http://127.0.0.1:8000/generate/", {
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
        console.log(result);
        setGeneratedData(result?.res);
        toast.success("Data generated successfully");
      })
      .catch((e: Error) => {
        toast.error(e.message);
      });
  };


    const downloadHandler= ()=>{
        let csvContent = "data:text/csv;charset=utf-8," 
    + generatedData.map(e => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${fileName}_synd.csv`);
    document.body.appendChild(link); // Required for FF
    
    link.click(); // This will download the data file named "my_data.csv".
    }

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
        <Button className={classes.downloadbutton} onClick={downloadHandler} disabled={generatedData[0].length===0} >Download data</Button>

      </form>
    <DataTable generatedData={generatedData}/>
    </section>
  );
};
export default GeneratedData;
