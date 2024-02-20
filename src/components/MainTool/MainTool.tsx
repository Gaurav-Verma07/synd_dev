import { Tabs, rem } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import DropZone from "../Dropzone/Dropzone";
import DataPreview from "../DataPreview/DataPreview";
import GeneratedData from "../GeneratedData/GeneratedData";
import classes from "./MainTool.module.css";
const MainTool = () => {
  return (
    <Tabs
      color="grape"
      radius="xs"
      defaultValue="Upload"
      mt={100}
      classNames={classes}
    >
      <Tabs.List>
        <Tabs.Tab
          value="Upload"
          leftSection={
            <IconSettings style={{ width: rem(16), height: rem(16) }} />
          }
        >
          Upload
        </Tabs.Tab>
        <Tabs.Tab
          value="Preview"
          leftSection={
            <IconMessageCircle style={{ width: rem(16), height: rem(16) }} />
          }
        >
          Preview
        </Tabs.Tab>
        <Tabs.Tab
          value="Generate Data"
          leftSection={
            <IconPhoto style={{ width: rem(16), height: rem(16) }} />
          }
        >
          Generate Data
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Upload">
        <DropZone />
      </Tabs.Panel>

      <Tabs.Panel value="Preview">
        <DataPreview />
      </Tabs.Panel>

      <Tabs.Panel value="Generate Data">
        <GeneratedData />
      </Tabs.Panel>
    </Tabs>
  );
};

export default MainTool;
