import { Button, Container, Text, Title } from "@mantine/core";
import classes from "./Herobox.module.css";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Particle from "../../assets/background_video.mp4";

const Herobox = () => {
  const navigate = useNavigate();
  return (
    <Container className={classes.section}>
      <video className={classes.bgvideo} autoPlay muted loop id="myVideo">
        <source src={Particle} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className={classes.left}>
        <Title className={classes.heading}>
          Empowering <span className="gradient">Insights </span>
          through <span className="gradient2"> Synthetic data</span>
        </Title>
        <Text className={classes.info}>
          Unlock the power of data without compromising privacy or quality. SynD
          is our all-in-one synthetic data generation tool, designed to empower
          businesses and researchers with realistic, privacy-conscious data for
          a wide range of applications.
        </Text>
        <Button
          className={classes.btn}
          onClick={() => {
            navigate("/tool");
          }}
        >
          <span> Get started</span> <IconArrowNarrowRight size={40} />
        </Button>
      </div>
    </Container>
  );
};

export default Herobox;
