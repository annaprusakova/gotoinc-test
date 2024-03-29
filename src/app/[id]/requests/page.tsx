'use client';

import { Heading } from '@/components/ui/index';
import Table from '@/components/ui/table/Table';
import { useParams } from 'next/navigation';

export default function UserRequestPage() {
	const { id } = useParams();
	return (
		<div className='rounded-lg border p-2 shadow-sm'>
			<div className='relative w-full overflow-auto'>
				<Heading text={`The list of ${id} user requests`} />
				<Table />
			</div>
		</div>
	);
}
