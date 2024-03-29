import CreateForm from '@/components/createForm/CreateForm';
import { Heading } from '@/components/ui/index';

export default function UserDeliverPage() {
	return (
		<div className='flex flex-col items-center justify-center space-x-1 p-24'>
			<Heading text={'Create deliver'} />
			<CreateForm />
		</div>
	);
}
