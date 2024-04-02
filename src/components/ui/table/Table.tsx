'use client';

import { columnNames } from '@/data/columnsName';
import Column from './Column';
import { MatchedRequest, Request } from '@/dto/userRequests';
import Row from './Row';
import styles from './table.module.scss';

type TableProps = {
	requests: Request[];
	isAllUsersRequests: boolean;
	setSelectedRequest?: (request: Request) => void;
	matchedRequests?: MatchedRequest | null;
};
export default function Table({
	requests,
	isAllUsersRequests = false,
	setSelectedRequest,
	matchedRequests,
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
						setSelectedRequest={setSelectedRequest}
						matchedRequests={matchedRequests}
					/>
				))}
			</tbody>
		</table>
	);
}
