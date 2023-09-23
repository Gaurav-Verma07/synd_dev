/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Group, Paper, Text, rem } from '@mantine/core';
import { IconUpload, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps } from '@mantine/dropzone';
import classes from './Dropzone.module.css';
import * as Papa from 'papaparse';
import { useState, useContext } from 'react';
import DataContext from '../../context/dataContext';

const DropZone = (props: Partial<DropzoneProps>) => {
  const [data, setData] = useState<any>();
  const { setAllData } = useContext(DataContext);

  const handleFile = (files: any) => {
    files.forEach((file: any) => {
      console.log(file);
      try {
        const reader = new FileReader();
        reader.onload = () => {
          if (file.type !== 'text/csv') console.log('wrong file');
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
  console.log('data=', data);
  return (
    <>
      <Paper className={classes.main}>
        <Dropzone
          onDrop={(files) => {
            handleFile(files);
          }}
          onReject={(files) => console.log('rejected files', files)}
          // maxSize={3 * 1024 ** 2}
          accept={['text/csv']}
          {...props}
          className={classes.dropzone}
        >
          <Group
            justify="center"
            gap="xl"
            // mih={220}
            style={{ pointerEvents: 'none' }}
          >
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: 'var(--mantine-color-blue-6)',
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: 'var(--mantine-color-red-6)',
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
        <Button className={classes.button}>Upload</Button>
      </Paper>
      <Text className={classes.info}>
        *Make sure to upload an error free file with all fields defined so as to avoid any possible errors while working
        with it.
      </Text>
    </>
  );
};

export default DropZone;
