import DataPreview from "../DataPreview/DataPreview";
import DropZone from "../Dropzone/Dropzone";
import GeneratedData from "../GeneratedData/GeneratedData";

const MainTool = () => {
  return (
    <div>
      <DropZone />
      <DataPreview />
      <GeneratedData />
    </div>
  );
};
export default MainTool;
