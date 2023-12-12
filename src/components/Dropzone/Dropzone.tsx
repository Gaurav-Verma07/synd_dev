import { Group, Paper, Text, rem } from "@mantine/core";
import { IconUpload, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import classes from "./Dropzone.module.css";
import * as Papa from "papaparse";
import { useContext } from "react";
import DataContext from "../../context/dataContext";
// import LandingVideo from "../../assets/pretrained1.mp4";
import { toast } from "react-toastify";
import DataTimeLine from "../DataTimeLine/DataTimeLine";

const DropZone = (props: Partial<DropzoneProps>) => {
  const { setAllData, setUserFile } = useContext(DataContext);

  const handleFile = (files: any) => {
    files.forEach((file: any) => {
      setUserFile(file);
      try {
        const reader = new FileReader();
        reader.onload = () => {
          if (file.type !== "text/csv") console.log("wrong file");
          else {
            Papa.parse(file, {
              dynamicTyping: true,
              skipEmptyLines: true,
              complete: (result: any) => {
                setAllData(result?.data);
              },
            });
          }
        };
        reader.readAsArrayBuffer(file);
      } catch (err: any) {
        toast.error(err);
      }
    });
  };

  return (
    <div className={classes.section}>
      <div className={classes.left}>
        {/* <div className={classes.videoblock}>
          <video className={classes.video} autoPlay muted loop>
            <source src={LandingVideo} type="video/mp4" />
          </video>
        </div> */}
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
        <Text className={classes.info} size="xs" c="#777" pt={20}>
          *Make sure to upload an error free file with all fields defined so as
          to avoid any possible errors while working with it.
        </Text>
      </div>
      <div className={classes.right}>
        <DataTimeLine />
      </div>
    </div>
  );
};

export default DropZone;
