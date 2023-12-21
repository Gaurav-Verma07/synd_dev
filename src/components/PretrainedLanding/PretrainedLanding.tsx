import { Flex, Group, Radio, Text, Title } from "@mantine/core";
import classes from "./PretrainedLanding.module.css";
import PretrainVideo from "../../assets/pretrained2.mp4";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../context/dataContext";
import { useMediaQuery } from '@mantine/hooks';
const PretrainedLanding = () => {
  const [value, setValue] = useState("");
  const { setPretrinType } = useContext(DataContext);
  useEffect(() => {
    setPretrinType(value);
  }, [value]);
  const matches = useMediaQuery('(max-width: 400px)');

  return (
    <section className={classes.section}>
      <div className={classes.back}></div>
      {/* <Image src={Pretrainbg} className={classes.bg} /> */}
      <div className={classes.main}>
        <div className={classes.left}>
          <Flex direction={"column"} wrap={"wrap"} justify={"center"} align={"center"}>
          <Title mb={20} w={matches?250:370} order={1} c={"white"} size={matches? '40px' : '45px'}>
            Work around with our
            <span className="gradient2"> Pretrained Models</span>
          </Title>
          <Text c={"white"} size="md" fw={600} w={matches?250:370}>
            Trained using SynD, these model excels in generating synthetic data
            that mirrors the statistical characteristics of the original
            dataset.
          </Text>
          <div className={classes.select}>
            <Radio.Group
              value={value}
              onChange={setValue}
              className={classes.radiogroup}
              required
              withAsterisk
            >
              <Text c="grey">Select dataset type</Text>
              <Group mt={10}>
                <Radio
                  value="tabular"
                  color="grape"
                  size="md"
                  label="Tabular"
                />
                <Radio
                  value="timeseries"
                  color="grape"
                  size="md"
                  label="Time Series"
                />
              </Group>
            </Radio.Group>
          </div>
          </Flex>
        </div>
        <div className={classes.right}>
          <video className={classes.img} autoPlay muted loop>
            <source src={PretrainVideo} className={classes.source} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default PretrainedLanding;
