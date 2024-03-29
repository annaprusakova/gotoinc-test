'use client';

import { Button, Heading } from '@/components/ui/index';
import { useParams, useRouter } from 'next/navigation';

export default function UserCreatePage() {
	const router = useRouter();
	const { id } = useParams();

	return (
		<div className='flex h-full w-full flex-col items-center justify-center p-24'>
			<Heading text={'Select request type'} />
			<div className='flex flex-row items-center justify-center gap-6'>
				<Button
					text={'Order'}
					onClick={() => router.push(`/${id}/create/order`)}
				/>
				<Button
					text={'Deliver'}
					onClick={() => router.push(`/${id}/create/deliver`)}
				/>
			</div>
		</div>
	);
}
