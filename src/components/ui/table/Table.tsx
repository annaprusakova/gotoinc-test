'use client';

import { columnNames } from '@/data/columnsName';
import Column from './Column';
import { Request } from '@/dto/userRequests';
import Row from './Row';
import styles from './table.module.scss';

type TableProps = {
	requests: Request[];
	isAllUsersRequests: boolean;
};
export default function Table({
	requests,
	isAllUsersRequests = false,
}: TableProps) {
	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.tr}>
					{columnNames.map((columnName, index) => (
						<Column key={index} name={columnName} />
					))}
				</tr>
			</thead>
			<tbody>
				{requests.map((row, index) => (
					<Row
						key={index}
						rowData={row}
						isAllUsersRequests={isAllUsersRequests}
					/>
				))}
			</tbody>
		</table>
	);
}
