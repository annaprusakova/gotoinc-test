'use client';

import { Button } from '@/components/ui/index';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	const id = 1;
	return (
		<div className='flex items-center justify-center'>
			<Button text={'Create'} onClick={() => router.push(`/${id}/create`)} />
			<Button
				text={'User Requests'}
				onClick={() => router.push(`/${id}/requests`)}
			/>
			<Button text={'All requests'} onClick={() => router.push('/request')} />
		</div>
	);
}
