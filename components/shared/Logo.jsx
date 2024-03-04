import Link from 'next/link';
import { FaAirbnb } from 'react-icons/fa';

export const AirbnbLogo = () => {
	return (
		<Link href='/' className='w-max flex items-center gap-1.5'>
			<FaAirbnb color='#FF385C' size={35} />

			<span className='hidden xl:block text-[#FF385C] text-[22px] font-black leading-[30px] tracking-tighter'>
				airbnb
			</span>
		</Link>
	);
};
