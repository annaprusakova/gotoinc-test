'use client';

import OrderForm from '@/components/orderForm/OrderForm';
import Heading from '@/components/ui/heading/Heading';

export default function UserOrderPage() {
	return (
		<main className='flex min-h-screen w-full flex-col items-center justify-center space-x-1 p-24'>
			<Heading text={'Create order'} />
			<OrderForm />
		</main>
	);
}
