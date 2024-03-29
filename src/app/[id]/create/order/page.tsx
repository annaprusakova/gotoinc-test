'use client';

import CreateForm from '@/components/createForm/CreateForm';
import { Heading } from '@/components/ui/index';
import { useDispatch } from 'react-redux';
import { createOrderRequest } from '../../../../lib/features/requestSlice';
import { Request, RequestType } from '@/dto/data';

export default function UserOrderPage() {
	const dispatch = useDispatch();
	const handleSubmit = (formData: Request) => {
		dispatch(createOrderRequest({ ...formData }));
	};

	return (
		<div className='flex flex-col items-center justify-center p-24'>
			<Heading text={'Create order'} />
			<CreateForm type={RequestType.ORDER} onSubmit={handleSubmit} />
		</div>
	);
}
