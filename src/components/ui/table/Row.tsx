import { Request } from '@/dto/userRequests';
import Image from 'next/image';
import styles from './table.module.scss';
import moment from 'moment';

type RowProps = {
	rowData: Request;
};
export default function Row({ rowData }: RowProps) {
	const {
		cityFrom,
		cityTo,
		parcelType: type,
		dateDispatch: dateOfDispatch,
		description,
		createdAt,
	} = rowData;
	return (
		<tr className={styles.tr}>
			<td className={styles.td}>{cityFrom}</td>
			<td className={styles.td}>{cityTo}</td>
			<td className={styles.td}>{type}</td>
			<td className={styles.td}>
				{moment.unix(dateOfDispatch).format('MM/DD/YYYY')}
			</td>
			<td className={styles.td}>{description}</td>
			<td className={styles.td}>
				{moment.unix(createdAt).format('MM/DD/YYYY')}
			</td>
			<td className={styles.td}>
				<button className={styles.actionButton}>
					<Image src='/action.svg' alt='Action' width={20} height={20} />
				</button>
			</td>
		</tr>
	);
}
