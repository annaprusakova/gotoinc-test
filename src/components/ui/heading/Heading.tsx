import styles from './heading.module.scss';

type HeadingProps = {
	text: string;
};
export default function Heading({ text }: HeadingProps) {
	return <h2 className={styles.heading}>{text}</h2>;
}
