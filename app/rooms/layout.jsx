import { Header } from '@/components/ui/Header';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/ui/Footer';

const RoomsLayout = ({ children }) => {
	return (
		<div className='h-full w-full flex flex-col'>
			<Header styles='max-w-[1200px]'>
				<Navbar />
			</Header>

			<main className='flex-1 flex justify-center md:mt-28 md:mb-8'>{children}</main>

			<Footer styles='max-w-[1200px] xxl:px-20' />
		</div>
	);
};

export default RoomsLayout;
