'use client';

import Table from '@/components/ui/table/Table';
import { Request, UserRequests } from '@/dto/userRequests';
import { RootState } from '@/lib/store';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function UserRequestPage() {
	const { id } = useParams();
	const data: UserRequests[] = useSelector((state: RootState) => state.request);
	const [requests, setRequests] = useState<Request[] | null>();

	useEffect(() => {
		setRequests(data.find((elem) => elem.userId === (id as string))?.requests);
	}, []);

	return (
		<div className='rounded-lg border p-2 shadow-sm'>
			<div className='relative w-full'>
				{requests ? (
					<Table requests={requests} isAllUsersRequests={false} />
				) : (
					<span>No data yet</span>
				)}
			</div>
		</div>
	);
}
