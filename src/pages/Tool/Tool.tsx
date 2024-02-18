import { Link, useNavigate } from "react-router-dom";
import DataPreview from "../../components/DataPreview/DataPreview";
import DropZone from "../../components/Dropzone/Dropzone";
import GeneratedData from "../../components/GeneratedData/GeneratedData";
import { HeaderMenu } from "../../components/Header/Header";

// const Tool = () => {
//   return (
//     <div>
//       <HeaderMenu />
// <DropZone />
// <DataPreview />
// <GeneratedData />
//     </div>
//   );
// };

// export default Tool;

import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Tool = () => {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 60 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 200 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      // padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          {/* <MantineLogo size={30} /> */}
          <Title
              className={`gradient`}
              onClick={() => {
                navigate("/");
              }}
            >
              SynD
            </Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {["Dashboard", "Activity", "Project", "Profile"].map((data, index) => (
          <Text py={10} fw={600} >
          <Link style={{color:'#000', textDecoration:'none'}} to={`/tool/${data}`}>{data}</Link>
          </Text>
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        {" "}
        <DropZone />
        <DataPreview />
        <GeneratedData />
      </AppShell.Main>
    </AppShell>
  );
};

export default Tool;
