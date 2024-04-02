import { Request } from '@/dto/userRequests';
import styles from './table.module.scss';
import moment from 'moment';

type MatchedProps = {
	request: Request;
};
export default function MatchedRow({ request }: MatchedProps) {
	const {
		type,
		cityFrom,
		cityTo,
		parcelType,
		dateDispatch,
		description,
		createdAt,
	} = request;
	return (
		<tr className={'bg-slate-400'}>
			<td className={styles.td}>
				{type.slice(0, 1) + type.slice(1, type.length).toLowerCase()}
			</td>
			<td className={styles.td}>{cityFrom}</td>
			<td className={styles.td}>{cityTo}</td>
			<td className={styles.td}>
				{parcelType
					? parcelType?.slice(0, 1) +
						parcelType?.slice(1, parcelType?.length).toLowerCase()
					: ''}
			</td>
			<td className={styles.td}>
				{moment.unix(dateDispatch).format('MM/DD/YYYY')}
			</td>
			<td className={styles.td}>{description}</td>
			<td className={styles.td}>
				{moment.unix(createdAt).format('MM/DD/YYYY')}
			</td>
		</tr>
	);
}
