import { Flex, Image, Text, Title } from '@mantine/core';
import classes from './Industries.module.css';
import Government from '../../assets/government.svg';
import Finance from '../../assets/finance.svg';
import Healthcare from '../../assets/healthcare.svg';
import RD from '../../assets/research.svg';
import Automotive from '../../assets/automotive.svg';

const data = [
  {
    img: Government,
    industry: 'Government',
  },
  {
    img: Finance,
    industry: 'Finance',
  },
  {
    img: Healthcare,
    industry: 'Healthcare',
  },
  {
    img: RD,
    industry: 'Research & Development',
  },
  {
    img: Automotive,
    industry: 'Automotive',
  },
];

const Industries = () => {
  return (
    <section className={classes.section}>
      <Title className={classes.title} >Industries we serve</Title>
      <Flex  justify={'space-evenly'} wrap={'wrap'}  >
        {data.map((item: any, index: number) => (
          <Flex key={index} direction={'column'} align={'center'} className={classes.box}>
            <Image className={classes.img} src={item.img} />
            <Text className={classes.text} >{item.industry}</Text>
          </Flex>
        ))}
      </Flex>
    </section>
  );
};

export default Industries;
