import css from './styles.module.scss';
import classnames from 'classnames/bind';
import Image from '@components/shared/Image';
import LabelTitleText from '@components/shared/LabelTitleText';

const cx = classnames.bind(css);

function Hero({ className, content, image }) {
  return (
    <section className={cx(css.Hero, className)}>
      <div className={css.heroWrapper}>
        <div className={css.innerWrapper}>
          {content && (
            <LabelTitleText
              titleProps={{
                theme: 'white',
                size: 'extra-large',
                tag: 'h1',
              }}
              textProps={{
                theme: 'white',
                className: css.text,
                tag: 'h2',
              }}
              {...content}
            />
          )}
          {image && <Image alt="" className={css.image} priority={true} layout="fill" {...image} />}
        </div>
      </div>
    </section>
  );
}

export default Hero;
