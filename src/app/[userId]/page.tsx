'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function IdPage() {
	const router = useRouter();
	const { userId } = useParams();

	useEffect(() => {
		router.push(`/${userId}/requests`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div></div>;
}
