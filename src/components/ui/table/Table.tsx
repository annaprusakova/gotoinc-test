import { columnNames } from '@/data/columnsName';
import Column from './Column';
import { Request } from '@/dto/data';
import Row from './Row';
import styles from './table.module.scss';

type TableProps = {
	requests: Request[];
};
export default function Table({ requests }: TableProps) {
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
					<Row key={index} rowData={row} />
				))}
			</tbody>
		</table>
	);
}
