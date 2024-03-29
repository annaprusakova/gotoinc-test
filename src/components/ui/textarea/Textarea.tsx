import styles from './textarea.module.scss';

type TextAreaProps = {
	label: string;
	value: string;
	placeholder: string;
	onChange: (value: string) => void;
};
export function TextArea({
	label,
	placeholder,
	value,
	onChange,
}: TextAreaProps) {
	return (
		<div className={'mb-6'}>
			<label className={styles.label}>{label}</label>
			<textarea
				rows={4}
				className={styles.textarea}
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
}
