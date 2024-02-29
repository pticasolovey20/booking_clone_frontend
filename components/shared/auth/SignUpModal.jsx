'use client';

import { AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';

import { Modal } from '@/components/shared/modal/Modal';
import { SignUpForm } from '@/components/shared/auth/SignupForm';

export const SignUpModal = () => {
	const { isSignUpModalOpen, handleSignUpModalClose } = useAppContext();

	return (
		<AnimatePresence initial={false} mode='wait'>
			{isSignUpModalOpen && <Modal handleClose={handleSignUpModalClose} content={<SignUpForm />} />}
		</AnimatePresence>
	);
};
