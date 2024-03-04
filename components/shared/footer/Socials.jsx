import Link from 'next/link';
import { socials } from '@/constants';

export const Socials = () => {
	return (
		<ul className='flex flex-wrap gap-3'>
			{socials.map(({ id, ariaLabel, icon }) => (
				<li key={id}>
					<Link href='/' aria-label={ariaLabel}>
						{icon}
					</Link>
				</li>
			))}
		</ul>
	);
};
