import styles from './textarea.module.scss';

type TextAreaProps = {
	label: string;
	value: string;
	placeholder: string;
};
export default function TextArea({ label, placeholder, value }: TextAreaProps) {
	return (
		<div>
			<label className={styles.label}>{label}</label>
			<textarea
				rows={4}
				className={styles.textarea}
				placeholder={placeholder}
				value={value}
			/>
		</div>
	);
}
