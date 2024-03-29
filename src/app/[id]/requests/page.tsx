'use client';

import { Heading } from '@/components/ui/index';
import Table from '@/components/ui/table/Table';
import { UserRequests } from '@/dto/userRequests';
import { RootState } from '@/lib/store';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function UserRequestPage() {
	const { id } = useParams();
	const data: UserRequests[] = useSelector((state: RootState) => state.request);
	const requests = data.find(
		(elem) => elem.userId === (id as string)
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
