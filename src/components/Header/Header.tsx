import { Menu, Group, Center, Burger, Container, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./Header.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
  { link: "/", label: "About" },
  {
    link: "/",
    label: "Learn",
    links: [
      { link: "/docs", label: "Documentation" },
      { link: "/resources", label: "Resources" },
      { link: "/community", label: "Community" },
      { link: "/blog", label: "Blog" },
    ],
  },
  { link: "/pretrained-model", label: "Pretrained models" },
  { link: "/", label: "Docs" },
  {
    link: "/",
    label: "Support",
    links: [
      { link: "#faq", label: "FAQ" },
      { link: "/demo", label: "Book a demo" },
      { link: "/forums", label: "Forums" },
    ],
  },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();
  const navigate = useNavigate();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => {
                event.preventDefault();
                navigate(link.link);
              }}
            >
              <Center>
                <span
                  className={`${classes.linkLabel} ${
                    location.pathname === "/tool" && classes.toolpage
                  }`}
                >
                  {link.label}
                </span>
                <IconChevronDown
                  className={
                    location.pathname === "/tool" ? classes.toolpage : ""
                  }
                  size="0.9rem"
                  stroke={1.5}
                />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={`${classes.link} ${
          location.pathname === "/tool" && classes.toolpage
        }`}
        onClick={(event) => {
          event.preventDefault();
          navigate(link.link);
        }}
      >
        {link.label}
      </a>
    );
  });

  return (
    <div className={classes.section}>
      <header
        className={`${classes.header} ${
          location.pathname !== "/" && classes.backheader
        }`}
      >
        <Container size="md">
          <div className={classes.inner}>
            {/* <MantineLogo size={28} /> */}
            {/* <Image src={Logo} /> */}
            <Title
              className={`gradient  ${classes.logo} `}
              onClick={() => {
                navigate("/");
              }}
            >
              SynD
            </Title>
            <Group gap={5} visibleFrom="lg">
              {items}
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              size="lg"
              hiddenFrom="lg"
            />
          </div>
        </Container>
      </header>
    </div>
  );
}
