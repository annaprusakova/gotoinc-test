'use client';

import { useParams, usePathname } from 'next/navigation';
import styles from './header.module.scss';
import { useEffect, useState } from 'react';

export default function Header() {
	const pathname = usePathname();
	const { id } = useParams();
	const [routeText, setRouteText] = useState<string>('');

	useEffect(() => {
		if (pathname.includes('/order')) {
			setRouteText('Create order');
		} else if (pathname.includes('/deliver')) {
			setRouteText('Create delivery');
		} else if (pathname.includes('/create')) {
			setRouteText('Create');
		} else if (pathname.includes(`/${id}/requests`)) {
			setRouteText(`The list of ${id} user's requests`);
		} else if (pathname.includes('/request')) {
			setRouteText("The list of all users' requests");
		}
	}, [pathname]);

	return (
		<header className={styles.header}>
			<div className='w-full flex-1'>
				<h1 className='text-lg font-semibold'>{routeText}</h1>
			</div>
		</header>
	);
}
