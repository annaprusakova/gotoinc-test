import styles from './select.module.scss';

type SelectProps = {
	label: string;
	options: string[];
};

export function Select({ label, options }: SelectProps) {
	return (
		<div className='mb-6 max-w-sm'>
			<label className={styles.label}>{label}</label>
			<select id='type' className={styles.select}>
				{options.map((elem, index) => (
					<option key={index} value={elem}>
						{elem}
					</option>
				))}
			</select>
		</div>
	);
}
