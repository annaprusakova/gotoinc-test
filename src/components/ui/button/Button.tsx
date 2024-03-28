import styles from './button.module.scss';

type ButtonProps = {
	text: string;
	onClick?: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
	return (
		<button className={styles.button} onClick={onClick}>
			{text}
		</button>
	);
}
