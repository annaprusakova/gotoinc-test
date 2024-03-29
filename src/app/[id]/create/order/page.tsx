'use client';

import CreateForm from '@/components/createForm/CreateForm';
import { Heading } from '@/components/ui/index';
import { useDispatch } from 'react-redux';
import { createRequest } from '../../../../lib/features/requestSlice';
import { Request, RequestType } from '@/dto/userRequests';
import { useParams } from 'next/navigation';

export default function UserOrderPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const handleSubmit = (formData: Request) => {
		dispatch(createRequest({ request: formData, userId: id as string }));
	};

	return (
		<div className='flex flex-col items-center justify-center p-24'>
			<Heading text={'Create order'} />
			<CreateForm type={RequestType.ORDER} onSubmit={handleSubmit} />
		</div>
	);
}
