import styles from './input.module.scss';

type InputProps = {
	label: string;
	value: string;
	placeholder?: string;
	onChange?: () => void;
	error?: string;
};
export function Input({
	label,
	value,
	placeholder,
	onChange,
	error,
}: InputProps) {
	return (
		<div className='mb-6'>
			<label className={styles.label}>{label}</label>
			<input type='text' placeholder={placeholder} className={styles.input} />
			{error && <p className={styles.error}>{error}</p>}
		</div>
	);
}
