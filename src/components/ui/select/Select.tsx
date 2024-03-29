import { ParcelType } from '@/dto/userRequests';
import styles from './select.module.scss';

type SelectProps = {
	label: string;
	options: string[];
	value: ParcelType;
	onChange: (value: ParcelType) => void;
};

export function Select({ label, value, options, onChange }: SelectProps) {
	return (
		<div className='mb-6 max-w-sm'>
			<label className={styles.label}>{label}</label>
			<select
				id='type'
				className={styles.select}
				value={value}
				onChange={(e) => onChange(e.target.value as ParcelType)}
			>
				{options.map((elem, index) => (
					<option key={index} value={elem}>
						{elem.slice(0, 1) + elem.slice(1, elem.length).toLowerCase()}
					</option>
				))}
			</select>
		</div>
	);
}
