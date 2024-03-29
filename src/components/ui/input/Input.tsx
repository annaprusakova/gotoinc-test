import styles from './input.module.scss';

type InputProps = {
	label: string;
	value: string;
	placeholder?: string;
	onChange: (value: string) => void;
};
export function Input({ label, value, placeholder, onChange }: InputProps) {
	return (
		<div className='mb-6'>
			<label className={styles.label}>{label}</label>
			<input
				type='text'
				placeholder={placeholder}
				className={styles.input}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
}
