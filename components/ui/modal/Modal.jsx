import { motion } from 'framer-motion';
import { cn } from '@/utils';

import { Backdrop } from '@/components/ui/modal/Backdrop';
import { MdOutlineClose } from 'react-icons/md';

const dropIn = {
	hidden: {
		y: '100vh',
		opacity: 0,
	},

	visible: {
		y: '0',
		opacity: 1,
		transition: {
			duration: 0.1,
			type: 'spring',
			damping: 50,
			stiffness: 500,
		},
	},

	exit: {
		y: '100vh',
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};

export const Modal = ({ handleClose, label, content }) => {
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				initial='hidden'
				animate='visible'
				exit='exit'
				variants={dropIn}
				onClick={(event) => event.stopPropagation()}
				className={cn(
					'w-full sm:w-[640px] h-[calc(100%-10px)] sm:h-[600px]',
					'absolute sm:static bottom-0 flex flex-col',
					'rounded-t-xl sm:rounded-xl bg-white'
				)}
			>
				<div className='relative w-full border-b p-5'>
					<MdOutlineClose
						role='button'
						size={20}
						className='cursor-pointer hover:scale-110'
						onClick={handleClose}
					/>

					<h3
						className={cn(
							'absolute right-1/2 top-1/2',
							'translate-x-1/2 -translate-y-1/2',
							'text-lg font-semibold select-none'
						)}
					>
						{label}
					</h3>
				</div>

				<div
					className={cn(
						'flex-1 w-full p-4 select-none',
						'flex flex-col items-center justify-center'
					)}
				>
					{content}
				</div>
			</motion.div>
		</Backdrop>
	);
};
