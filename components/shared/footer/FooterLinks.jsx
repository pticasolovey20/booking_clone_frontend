import Link from 'next/link';

import { footerLinks } from '@/constants';
import { cn } from '@/utils';

import { BsCurrencyDollar } from 'react-icons/bs';
import { FiGlobe } from 'react-icons/fi';

import { Socials } from '@/components/shared/footer/Socials';

export const FooterLinks = () => {
	return (
		<div
			className={cn(
				'w-full py-6',
				'flex flex-col-reverse lg:flex-row',
				'justify-between items-start md:items-center gap-2'
			)}
		>
			<ul className='flex flex-wrap gap-2'>
				{footerLinks.map(({ id, content }) => (
					<li key={id} className='flex items-center gap-2'>
						<Link href='/' className='text-sm hover:underline'>
							{content}
						</Link>

						{id !== footerLinks.length && <div className='h-[2px] w-[2px] rounded-full bg-black' />}
					</li>
				))}
			</ul>

			<div className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-sm font-semibold'>
				<div className='flex items-center gap-2'>
					<Link href='/' className='flex items-center gap-1 hover:underline'>
						<FiGlobe />
						<span>English (US)</span>
					</Link>

					<Link href='/' className='flex items-center hover:underline'>
						<BsCurrencyDollar />
						<span>USD</span>
					</Link>
				</div>

				<Socials />
			</div>
		</div>
	);
};
