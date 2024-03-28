import styles from './select.module.scss';

type SelectProps = {
	label: string;
	options: string[];
};

export default function Select({ label, options }: SelectProps) {
	return (
		<form className='max-w-sm'>
			<label className={styles.label}>{label}</label>
			<select id='type' className={styles.select}>
				{options.map((elem, index) => (
					<option key={index} value={elem}>
						{elem}
					</option>
				))}
			</select>
		</form>
	);
}
