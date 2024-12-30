import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};


const FeatureList: FeatureItem[] = [
  {
    title: 'Effortless Conversion',
    Svg: require('@site/static/img/programming.svg').default,
    description: (
      <>
        Turn pseudo-code into Python with the snap of your fingers! Our tool is
        designed to make coding fun and stress-free, ensuring every line is
        accurate and beginner-friendly.
      </>
    ),
  },
  {
    title: 'Student-Focused Learning',
    Svg: require('@site/static/img/learning.svg').default,
    description: (
      <>
        Built with GCSE and O-level students in mind, this platform uses
        relatable examples, a pinch of humour, and easy-to-follow steps to help
        you master Python coding while having a laugh.
      </>
    ),
  },
  {
    title: 'Interactive Examples Galore',
    Svg: require('@site/static/img/exams.svg').default,
    description: (
      <>
        Dive into hands-on examples, complete with pseudo-code, Python
        translations, and outputs. Learn by seeing, doing, and laughing!
      </>
    ),
  },
];



function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
