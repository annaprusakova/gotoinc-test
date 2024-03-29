'use client';

import { Button, Heading } from '@/components/ui/index';
import { useParams, useRouter } from 'next/navigation';

export default function UserCreatePage() {
	const router = useRouter();
	const { id } = useParams();

	return (
		<main className='flex min-h-screen w-full flex-col items-center justify-center space-x-1 p-24'>
			<Heading text={'Select request type'} />
			<div className='flex w-1/3 flex-row items-center justify-between'>
				<Button
					text={'Order'}
					onClick={() => router.push(`/${id}/create/order`)}
				/>
				<Button
					text={'Deliver'}
					onClick={() => router.push(`/${id}/create/deliver`)}
				/>
			</div>
		</main>
	);
}
