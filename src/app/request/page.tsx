'use client';

import Table from '@/components/ui/table/Table';
import { Request } from '@/dto/userRequests';
import { RootState } from '@/lib/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function AllRequests() {
	const data = useSelector((state: RootState) => state.request);
	const [requests, setRequests] = useState<Request[] | null>();

	useEffect(() => {
		setRequests(data.map((elem) => elem.requests).flat());
	}, []);

	return (
		<div className='rounded-lg border p-2 shadow-sm'>
			<div className='relative w-full overflow-auto'>
				{requests ? (
					<Table requests={requests} isAllUsersRequests={true} />
				) : (
					<span>No data yet</span>
				)}
			</div>
		</div>
	);
}
