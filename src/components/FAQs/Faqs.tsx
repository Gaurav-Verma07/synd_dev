import { Container, Title, Accordion } from '@mantine/core';
import classes from './Faqs.module.css';

const data = [
  {
    que: 'What is synthetic data, and why is it important?',
    ans: "Synthetic data is artificially generated data that mimics real-world data while protecting privacy and data confidentiality. It's essential because it enables organizations to harness the benefits of data-driven insights without exposing sensitive information or dealing with data scarcity issues.",
  },
  {
    que: 'How does SynD work?',
    ans: 'SynD uses advanced AI algorithms to create synthetic data that closely replicates the statistical properties of real data. Users can customize the generated data, ensuring it aligns with their specific needs for machine learning, data augmentation, simulations, and more.',
  },
];

export function FaqSimple() {
  return (
    <div className={classes.section} id="faq" >
      <Container size="sm" className={classes.wrapper}>
        <Title className={classes.title}>Frequently Asked Questions</Title>

        <Accordion variant="separated">
          {data.map((item, index) => (
            <Accordion.Item key={index} className={classes.item} value={`${index}`}>
              <Accordion.Control className={classes.text}>{item.que}</Accordion.Control>
              <Accordion.Panel className={classes.text}>{item.ans}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}
