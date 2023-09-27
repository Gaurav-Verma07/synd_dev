import { Button, Container, Image, Text, Title } from '@mantine/core';
import classes from './Herobox.module.css';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import Grad1 from '../../assets/grad1.svg';
import Grad2 from '../../assets/grad2.svg';
import Grad3 from '../../assets/grad3.svg';

const Herobox = () => {
  const navigate = useNavigate();
  return (
    <Container className={classes.section}>
      <div>
        <Image className={`${classes.gradimg} ${classes.grad1}`} src={Grad1} />
        <Image className={`${classes.gradimg} ${classes.grad2}`} src={Grad2} />
        <Image className={`${classes.gradimg} ${classes.grad3}`} src={Grad3} />
      </div>
      <div className={classes.left}>
        <Title className={classes.heading}>
          Empowering <span className="gradient">Insights </span>
          through Synthetic data
        </Title>
        <Text className={classes.info}>
          Unlock the power of data without compromising privacy or quality. SynD Pro is your all-in-one synthetic data
          generation tool, designed to empower businesses and researchers with realistic, privacy-conscious data for a
          wide range of applications.
        </Text>
        <Button
          className={classes.btn}
          onClick={() => {
            navigate('/tool');
          }}
        >
          <span> Get started</span> <IconArrowNarrowRight size={40} />
        </Button>
      </div>
    </Container>
  );
};

export default Herobox;
