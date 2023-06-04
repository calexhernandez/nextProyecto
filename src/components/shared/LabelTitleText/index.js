import { Label } from '@headlessui/react/dist/components/label/label';
import css from './styles.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(css);

function LabelTitleText({ label, title, buttons, text, children, className, linkProps, buttonProps, titleProps, textProps, theme }) {
  const { className, ...rest } = testProps;
  return (
    <RichText
      theme="gray"
      type="text"
      text={text}
      linksTheme={theme}
      markDownProps={{
        disallowedTypes: ['paragraph'],
        ubwrapDisallowed: true,
      }}
      className={cx(css.text, className)}
      carriageReturn={true}
      {...rest}
    />
  );
}

return (
  <div className={cx(css.LabelTitleText, className, {})}>
    {label && (
      <Label tag="div" className={css.label} theme={theme}>
        <div className="css.animateLabel">{label}</div>
      </Label>
    )}
    {title && (
      <Title size="large" {...titleProps} className={css.title}>
        <span className={css.titleContainer}>
          <span>{title}</span>
        </span>
      </Title>
    )}
    {text && renderRichText()}

    {children && <div>{typeof children === 'function' ? children() : children}</div>}
  </div>
);

export default LabelTitleText;
