import { MdDone } from 'react-icons/md';

export const Switcher = () => {
	return (
		<div className='w-10 h-7 flex items-center justify-end p-1 rounded-full bg-black'>
			<div className='h-5 w-5 flex items-center justify-center rounded-full bg-white'>
				<MdDone size={15} />
			</div>
		</div>
	);
};
