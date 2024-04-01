'use client';

import CreateForm from '@/components/form/CreateForm';
import { useDispatch } from 'react-redux';
import { createRequest } from '../../../../lib/features/requestSlice';
import { Request, RequestType } from '@/dto/userRequests';
import { useParams } from 'next/navigation';

export default function UserOrderPage() {
	const { userId } = useParams();
	const dispatch = useDispatch();
	const handleSubmit = (formData: Request) => {
		dispatch(createRequest({ request: formData, userId: userId as string }));
	};

	return (
		<div className='flex flex-col items-center justify-center p-24'>
			<CreateForm type={RequestType.ORDER} onSubmit={handleSubmit} />
		</div>
	);
}
