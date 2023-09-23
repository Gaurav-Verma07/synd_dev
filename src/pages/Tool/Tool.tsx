import DataPreview from '../../components/DataPreview/DataPreview';
import DropZone from '../../components/Dropzone/Dropzone';
import { HeaderMenu } from '../../components/Header/Header';

const Tool = () => {
  return (
    <>
      <HeaderMenu />
      <DropZone />
      <DataPreview />
    </>
  );
};

export default Tool;
