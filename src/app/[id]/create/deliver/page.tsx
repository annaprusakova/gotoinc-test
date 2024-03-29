import CreateForm from '@/components/createForm/CreateForm';
import { Heading } from '@/components/ui/index';
import { Request, RequestType } from '@/dto/data';
import { useDispatch } from 'react-redux';
import { createDeliveryRequest } from '../../../../lib/features/requestSlice';

export default function UserDeliverPage() {
	const dispatch = useDispatch();
	const handleSubmit = (formData: Request) => {
		dispatch(createDeliveryRequest({ ...formData }));
	};
	return (
		<div className='flex flex-col items-center justify-center  p-24'>
			<Heading text={'Create deliver'} />
			<CreateForm type={RequestType.DELIVERY} onSubmit={handleSubmit} />
		</div>
	);
}
