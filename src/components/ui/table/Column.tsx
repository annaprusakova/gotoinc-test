type ColumnProps = {
	name: string;
};
export default function Column({ name }: ColumnProps) {
	return (
		<th className='text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 h-12 min-w-[150px] px-4 text-left align-middle font-medium'>
			{name}
		</th>
	);
}
