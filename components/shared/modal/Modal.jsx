import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { dropIn } from '@/animations';
import { cn } from '@/utils';

import { Backdrop } from '@/components/shared/modal/Backdrop';

export const Modal = ({ handleClose, classNames, children }) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => (document.body.style.overflow = 'unset');
	}, []);

	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				initial='hidden'
				animate='visible'
				exit='exit'
				variants={dropIn}
				onClick={(event) => event.stopPropagation()}
				className={cn(
					'max-w-[780px] w-full flex',
					'rounded-t-xl md:rounded-xl bg-white',
					classNames
				)}
			>
				{children}
			</motion.div>
		</Backdrop>
	);
};
