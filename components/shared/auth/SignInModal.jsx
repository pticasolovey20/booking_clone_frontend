'use client';

import { AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';

import { Modal } from '@/components/shared/modal/Modal';
import { SignInForm } from '@/components/shared/auth/SignInForm';

export const SignInModal = () => {
	const { isSignInModalOpen, handleSignInModalClose } = useAppContext();

	return (
		<AnimatePresence initial={false} mode='wait'>
			{isSignInModalOpen && <Modal handleClose={handleSignInModalClose} content={<SignInForm />} />}
		</AnimatePresence>
	);
};
