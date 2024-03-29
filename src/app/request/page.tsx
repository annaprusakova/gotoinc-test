'use client';

import { Heading } from '@/components/ui';
import Table from '@/components/ui/table/Table';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

export default function AllRequests() {
	const data = useSelector((state: RootState) => state.request);
	const allRequests = data.map((elem) => elem.requests);
	return (
		<div>
			<Heading text={`The list of all users requests`} />
			<div className='rounded-lg border p-2 shadow-sm'>
				<div className='relative w-full overflow-auto'>
					{allRequests ? (
						<Table requests={allRequests.flat()} />
					) : (
						<span>No data yet</span>
					)}
				</div>
			</div>
		</div>
	);
}
