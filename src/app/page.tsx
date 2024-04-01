'use client';
import { Heading } from '@/components/ui';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex h-full items-center justify-center gap-6'>
			<Image
				src='/delivery.svg'
				alt='Delivery Logo'
				width={60}
				height={60}
				className='mb-4'
			/>
			<Heading text={'DELIVERY Inc'} />
		</div>
	);
}
