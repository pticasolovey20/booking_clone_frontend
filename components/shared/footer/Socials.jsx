import Link from 'next/link';
import { socials } from '@/constants';

export const Socials = () => {
	return (
		<ul className='flex flex-wrap gap-3'>
			{socials.map(({ id, icon }) => (
				<li key={id}>
					<Link href='/'>{icon}</Link>
				</li>
			))}
		</ul>
	);
};
