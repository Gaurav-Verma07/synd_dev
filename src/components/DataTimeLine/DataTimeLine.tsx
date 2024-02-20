import { ThemeIcon, Text, Container, SimpleGrid, rem } from "@mantine/core";
import {
  IconGauge,
  IconCookie,
  IconUser,
  IconMessage2,
  IconLock,
} from "@tabler/icons-react";
import classes from "./DataTimeLine.module.css";

const MOCKDATA = [
  {
    icon: IconGauge,
    title: "Upload CSV data",
    description:
      "SynD makes uploading CSV data a breeze. Simply navigate to the upload section, select your CSV file, and click 'Upload'. SynD will handle the rest, parsing your data and preparing it for synthetic data generation.",
  },
  {
    icon: IconUser,
    title: "Preview data with better stats",
    description:
      "SynD offers an advanced data preview feature that goes beyond basic summaries. You can visualize your data's distribution with histograms, box plots, and scatter plots.",
  },
  {
    icon: IconCookie,
    title: "Train your model",
    description:
      "Training your model with SynD is straightforward. Choose the desired model architecture and hyperparameters, then let SynD handle the training process. You can monitor the training progress and adjust settings as needed.",
  },
  {
    icon: IconLock,
    title: "Data metrics Report",
    description:
      "Receive a detailed PDF report comparing various metrics of the real and synthetic data, such as mean, standard deviation, and correlation coefficients, for comprehensive analysis and validation of the synthetic dataset.",
  },
  {
    icon: IconMessage2,
    title: "Privacy solutions",
    description:
      "SynD prioritizes privacy by employing state-of-the-art techniques such as differential privacy and data anonymization. ",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className={classes.box}>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

const DataTimeLine = () => {
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper}>
      <SimpleGrid
        // mt={10}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: "xl", md: 50 }}
        verticalSpacing={{ base: "xl", md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default DataTimeLine;
