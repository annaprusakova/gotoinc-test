'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function IdPage() {
	const router = useRouter();
	const { id } = useParams();
	useEffect(() => {
		router.push(`/${id}/requests`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div></div>;
}
