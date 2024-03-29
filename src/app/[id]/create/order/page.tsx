'use client';

import CreateForm from '@/components/createForm/CreateForm';
import { Heading } from '@/components/ui/index';

export default function UserOrderPage() {
	return (
		<main className='flex min-h-screen w-full flex-col items-center justify-center space-x-1 p-24'>
			<Heading text={'Create order'} />
			<CreateForm />
		</main>
	);
}
