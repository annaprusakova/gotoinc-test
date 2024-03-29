import { routes } from '@/data/routes';
import NavBarItem from './NavBarItem';
import styles from './navbar.module.scss';
import Image from 'next/image';

export default function NavBar() {
	return (
		<nav aria-label='Sidebar' className={styles.aside}>
			<div className={styles.itemsContainer}>
				<div className='flex h-[60px] items-center px-6'>
					<a className='flex items-center gap-2 font-semibold' href='/'>
						<Image
							src='/delivery.svg'
							alt='Delivery Logo'
							width={20}
							height={20}
						/>
						<span>DELIVERY Inc</span>
					</a>
				</div>
				<ul className={styles.ul}>
					{routes.map((route, index) => (
						<NavBarItem key={index} link={route.route} itemName={route.name} />
					))}
				</ul>
			</div>
		</nav>
	);
}
