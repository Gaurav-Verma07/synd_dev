/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Group, Image, Paper, Table, Text, rem } from "@mantine/core";
import { IconUpload, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import classes from "./Dropzone.module.css";
import * as Papa from "papaparse";
import { useState, useContext } from "react";
import DataContext from "../../context/dataContext";
import Grad1 from "../../assets/grad1.svg";
import Grad2 from "../../assets/grad2.svg";
import Grad3 from "../../assets/grad3.svg";

const DropZone = (props: Partial<DropzoneProps>) => {
  const [data, setData] = useState<any>();
  const { setAllData, allData , setUserFile, userFile} = useContext(DataContext);

  const handleFile = (files: any) => {
    files.forEach((file: any) => {
      setUserFile(file);
      console.log(file);
      try {
        const reader = new FileReader();
        reader.onload = () => {
          if (file.type !== "text/csv") console.log("wrong file");
          else {
            Papa.parse(file, {
              dynamicTyping: true,
              skipEmptyLines: true,
              complete: (result: any) => {
                setData(result.data);
                setAllData(result?.data);
                console.log(data);
              },
            });
          }
        };
        reader.readAsArrayBuffer(file);
      } catch (err) {
        console.log(err);
      }
    });
  };


  return (
      <div className={classes.section}>
        <div>
          <Image
            className={`${classes.gradimg} ${classes.grad1}`}
            src={Grad1}
          />
          <Image
            className={`${classes.gradimg} ${classes.grad2}`}
            src={Grad2}
          />
          <Image
            className={`${classes.gradimg} ${classes.grad3}`}
            src={Grad3}
          />
        </div>
        <Paper className={classes.main}>
          <Dropzone
            onDrop={(files) => {
              handleFile(files);
            }}
            onReject={(files) => console.log("rejected files", files)}
            // maxSize={3 * 1024 ** 2}
            accept={["text/csv"]}
            {...props}
            className={classes.dropzone}
          >
            <Group
              justify="center"
              gap="xl"
              // mih={220}
              style={{ pointerEvents: "none" }}
            >
              <Dropzone.Accept>
                <IconUpload
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: "var(--mantine-color-blue-6)",
                  }}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: "var(--mantine-color-red-6)",
                  }}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <div className={classes.content}>
                <Dropzone.Idle>
                  <IconUpload />
                </Dropzone.Idle>

                {/* <div> */}
                <Text size="xl" inline>
                  Drag or drop files here
                </Text>
                <Text size="sm" inline className={classes.filetype}>
                  csv, excel . Max size 5MB
                </Text>
                {/* </div> */}
              </div>
            </Group>
          </Dropzone>
          {/* <Button className={classes.button}>Upload</Button> */}
        </Paper>
        <Text className={classes.info}>
          *Make sure to upload an error free file with all fields defined so as
          to avoid any possible errors while working with it.
        </Text>
      </div>
  );
};

export default DropZone;
