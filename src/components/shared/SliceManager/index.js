import css from './SliceManager.module.css';
import Hero from '@components/Slices/Hero';
import TopFeatures from '@components/Slices/TopFeatures';

const getSliceComponent = ({ __component, ...rest }, index) => {
  switch (__component) {
    case 'slices.top-features':
      return <TopFeatures key={`topFeature${index}`} className={css.slice} {...rest} />;
    case 'slices1.hero':
      return <Hero key={`hero${index}`} className={css.slice} {...rest} />;
  }
};

const SliceManager = ({ slices }) => slices.map(getSliceComponent);

SliceManager.defaultProps = {
  slices: [],
};

export default SliceManager;
