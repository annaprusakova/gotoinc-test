'use client';

import { Heading } from '@/components/ui/index';
import Table from '@/components/ui/table/Table';
import { mockData } from '@/data/mock';
import { useParams } from 'next/navigation';

export default function UserRequestPage() {
	const { id } = useParams();
	const requests = mockData.find(
		(elem) => elem.userId === parseInt(id as string)
	)?.requests;
	return (
		<div>
			<Heading text={`The list of ${id} user requests`} />
			<div className='rounded-lg border p-2 shadow-sm'>
				<div className='relative w-full overflow-auto'>
					{requests ? <Table requests={requests} /> : <span>No data yet</span>}
				</div>
			</div>
		</div>
	);
}
