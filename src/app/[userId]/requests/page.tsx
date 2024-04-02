'use client';

import { Table } from '@/components/ui/index';
import { MatchedRequest, Request, UserRequests } from '@/dto/userRequests';
import { RootState } from '@/lib/store';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function UserRequestPage() {
	const { userId } = useParams();
	const data: UserRequests[] = useSelector((state: RootState) => state.request);
	const [requests, setRequests] = useState<Request[] | null>();
	const [matchedRequests, setMatchedRequests] =
		useState<MatchedRequest | null>();
	const [selectedRequest, setSelectedRequest] = useState<Request | null>();

	useEffect(() => {
		if (selectedRequest) {
			let matchedDataRequests: Request[][] = [];
			data.forEach((elem) => {
				if (elem.userId !== userId) {
					const foundMatch = elem.requests.filter(
						(request) =>
							request.cityFrom === selectedRequest.cityFrom &&
							request.cityTo === selectedRequest.cityTo &&
							request.dateDispatch === selectedRequest.dateDispatch &&
							request.type !== selectedRequest.type
					);
					foundMatch && matchedDataRequests.push(foundMatch);
				}
			});
			setMatchedRequests({
				recordId: selectedRequest.id,
				records: matchedDataRequests.flat(),
			});
		}
		return () => {
			setMatchedRequests(null);
		};
	}, [selectedRequest]);

	useEffect(() => {
		if (data) {
			const allRequest = data.find(
				(elem) => elem.userId === (userId as string)
			)?.requests;
			allRequest && [...allRequest].sort((a, b) => b.createdAt - a.createdAt);
			setRequests(allRequest);
		}
	}, [data]);

	return (
		<>
			{requests?.length && (
				<span>
					You could select a row to see if there are matched requests from other
					users.
				</span>
			)}
			<div className='rounded-lg border p-2 shadow-sm'>
				<div className='relative w-full'>
					{requests ? (
						<Table
							requests={requests}
							isAllUsersRequests={false}
							setSelectedRequest={setSelectedRequest}
							matchedRequests={matchedRequests}
						/>
					) : (
						<span>No data yet</span>
					)}
				</div>
			</div>
		</>
	);
}
