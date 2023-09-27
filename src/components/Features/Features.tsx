import classes from './Features.module.css';

const data = [
  {
    heading: 'Data Generation Tool',
    info: [
      'Tailor the generated data to match your specific requirements, whether for ML, or simulations.',
      ' Generate large volumes of synthetic data to support projects of any size.',
    ],
  },
  {
    heading: 'Data Privacy Solutions',
    info: [
      'Safeguard sensitive information while generating valuable synthetic datasets.',
      ' Ensure that your synthetic data creation aligns with data protection regulations.',
    ],
  },
  {
    heading: 'Data Augmentation',
    info: [
      'Generate additional data points to address data scarcity issues and create more robust models.',
      ' Mitigate biases by creating diverse and representative synthetic data.',
    ],
  },
];
const Features = () => {
  return (
    <div className={classes.section}>
      {data.map((content, index) => (
        <div key={index} className={classes.box}>
          <div className={classes.head}>{content.heading}</div>
          <div className={classes.data}>
            {content.info.map((_el, index) => (
              <p key={index} className={classes.info}>
                {_el}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
