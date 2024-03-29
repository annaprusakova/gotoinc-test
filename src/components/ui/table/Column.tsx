import styles from './table.module.scss';

type ColumnProps = {
	name: string;
};
export default function Column({ name }: ColumnProps) {
	return <th className={styles.column}>{name}</th>;
}
