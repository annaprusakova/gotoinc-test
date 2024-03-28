'use client';

import Button from '@/components/ui/button/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	const id = 1;
	return (
		<main className='flex min-h-screen w-full items-center justify-center space-x-1 p-24'>
			<Button text={'Create'} onClick={() => router.push(`/${id}/create`)} />
			<Button
				text={'User Requests'}
				onClick={() => router.push(`/${id}/requests`)}
			/>
			<Button text={'All requests'} onClick={() => router.push('/request')} />
		</main>
	);
}
