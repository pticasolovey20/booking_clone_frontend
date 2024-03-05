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
				'fixed inset-0 min-h-dvh w-full',
				'flex justify-center items-center',
				'pt-4 md:p-10 bg-black/50 z-20'
			)}
		>
			{children}
		</motion.div>
	);
};
