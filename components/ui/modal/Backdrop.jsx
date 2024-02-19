import { motion } from 'framer-motion';
import { cn } from '@/utils';

export const Backdrop = ({ children, onClick }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={onClick}
			className={cn(
				'fixed top-0 left-0 h-screen w-full',
				'flex justify-center items-center',
				'bg-black bg-opacity-50 z-20'
			)}
		>
			{children}
		</motion.div>
	);
};
