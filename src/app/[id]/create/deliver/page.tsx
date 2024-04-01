'use client';

import CreateForm from '@/components/createForm/CreateForm';
import { Request, RequestType } from '@/dto/userRequests';
import { useDispatch } from 'react-redux';
import { createRequest } from '../../../../lib/features/requestSlice';
import { useParams } from 'next/navigation';

export default function UserDeliverPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const handleSubmit = (formData: Request) => {
		dispatch(createRequest({ request: formData, userId: id as string }));
	};
	return (
		<div className='flex flex-col items-center justify-center  p-24'>
			<CreateForm type={RequestType.DELIVERY} onSubmit={handleSubmit} />
		</div>
	);
}
