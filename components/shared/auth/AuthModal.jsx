'use client';

import { AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';

import { Modal } from '@/components/shared/modal/Modal';
import { AuthSwiper } from '@/components/shared/auth/AuthSwiper';

export const AuthModal = () => {
	const { isAuthModalOpen, handleAuthModalClose } = useAppContext();

	return (
		<AnimatePresence initial={false} mode='wait'>
			{isAuthModalOpen && (
				<Modal
					handleClose={handleAuthModalClose}
					classNames='md:w-[576px] max-h-full self-end md:self-center'
				>
					<AuthSwiper handleClose={handleAuthModalClose} />
				</Modal>
			)}
		</AnimatePresence>
	);
};
