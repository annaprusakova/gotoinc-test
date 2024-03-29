import styles from './button.module.scss';

type ButtonProps = {
	text: string;
	onClick: (e?: React.FormEvent<HTMLButtonElement>) => void;
};

export function Button({ text, onClick }: ButtonProps) {
	return (
		<button className={styles.button} onClick={(e) => onClick(e)}>
			{text}
		</button>
	);
}
