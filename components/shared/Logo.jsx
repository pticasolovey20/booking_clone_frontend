import { Poppins } from 'next/font/google';
import { cn } from '@/utils';
import { FaAirbnb } from 'react-icons/fa';

import Link from 'next/link';

const font = Poppins({
	subsets: ['latin'],
	weight: ['600'],
});

export const AirbnbLogo = () => {
	return (
		<Link href='/' className='w-max flex items-center gap-1.5'>
			<FaAirbnb color='#FF385C' size={35} />

			<span
				className={cn(
					font.className,
					'hidden xl:block text-[#FF385C] text-[22px] leading-[30px] tracking-tighter'
				)}
			>
				airbnb
			</span>
		</Link>
	);
};
