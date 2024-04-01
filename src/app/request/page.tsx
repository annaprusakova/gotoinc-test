'use client';

import { Button } from '@/components/ui';
import Table from '@/components/ui/table/Table';
import { Request } from '@/dto/userRequests';
import { RootState } from '@/lib/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function AllRequests() {
	const data = useSelector((state: RootState) => state.request);
	const [requests, setRequests] = useState<Request[] | null>();
	const [isSortASC, setIsSortASC] = useState<boolean>(true);

	const handleDefaultSort = () => {
		const allRequests = data.map((elem) => elem.requests).flat();
		allRequests.sort((a, b) => b.createdAt - a.createdAt);
		setRequests(allRequests);
	};
	const handleSort = () => {
		setIsSortASC(!isSortASC);
		const sortData = requests?.sort((a, b) =>
			!isSortASC
				? b.dateDispatch - a.dateDispatch
				: a.dateDispatch - b.dateDispatch
		);
		setRequests(sortData);
	};

	useEffect(() => {
		handleDefaultSort();
	}, []);

	return (
		<div>
			<Button
				text={`Sort by the date of sending ${isSortASC ? '↓' : '↑'}`}
				onClick={handleSort}
			/>
			<div className='mt-6 rounded-lg border p-2 shadow-sm'>
				<div className='relative w-full overflow-auto'>
					{requests ? (
						<Table requests={requests} isAllUsersRequests={true} />
					) : (
						<span>No data yet</span>
					)}
				</div>
			</div>
		</div>
	);
}
