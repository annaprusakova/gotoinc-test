import { routes } from '@/data/routes';
import NavBarItem from './NavBarItem';
import styles from './navbar.module.scss';
import Image from 'next/image';

export default function NavBar() {
	return (
		<div className={styles.navBarWrapper}>
			<div className={styles.navbar}>
				<div className={styles.appNameWrapper}>
					<a className={styles.appNameLink} href='/'>
						<Image
							src='/delivery.svg'
							alt='Delivery Logo'
							width={20}
							height={20}
						/>
						<span>DELIVERY Inc</span>
					</a>
				</div>
				<div className='flex-1'>
					<nav className={styles.nav}>
						{routes.map((route, index) => (
							<NavBarItem
								key={index}
								link={route.route}
								itemName={route.name}
							/>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
}
