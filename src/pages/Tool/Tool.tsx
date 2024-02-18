import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppShell, Burger, Group, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const dashboardLink = [
  {
    label: "Dashboard",
    link: "/tool/dashboard",
  },
  {
    label: "Activity",
    link: "/tool/activity",
  },
  {
    label: "Project",
    link: "/tool/project",
  },
  {
    label: "Profile",
    link: "/tool/profile",
  },
];

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
        {dashboardLink.map((data, index) => (
          <Text py={10} fw={600} key={index}>
            <Link
              style={{ color: "#000", textDecoration: "none" }}
              to={data.link}
            >
              {data.label}
            </Link>
          </Text>
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Tool;
