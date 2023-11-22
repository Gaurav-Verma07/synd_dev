import DataPreview from "../../components/DataPreview/DataPreview";
import DropZone from "../../components/Dropzone/Dropzone";
import GeneratedData from "../../components/GeneratedData/GeneratedData";
import { HeaderMenu } from "../../components/Header/Header";

const Tool = () => {
  return (
    <div>
      <HeaderMenu />
      <DropZone />
      <DataPreview />
      <GeneratedData />
    </div>
  );
};

export default Tool;
