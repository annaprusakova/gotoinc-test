'use client';

import { useParams } from 'next/navigation';

export default function UserRequestPage() {
	const { id } = useParams();
	return <div>user request page: {id}</div>;
}
