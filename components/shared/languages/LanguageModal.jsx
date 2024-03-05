'use client';

import { useAppContext } from '@/context/AppContext';
import { AnimatePresence } from 'framer-motion';

import { Modal } from '@/components/shared/modal/Modal';
import { Languages } from '@/components/shared/languages/Languages';

export const LanguageModal = () => {
	const { isLanguageModalOpen, handleLanguageModalClose } = useAppContext();

	return (
		<AnimatePresence initial={false} mode='wait'>
			{isLanguageModalOpen && (
				<Modal handleClose={handleLanguageModalClose} classNames='h-full'>
					<Languages handleClose={handleLanguageModalClose} />
				</Modal>
			)}
		</AnimatePresence>
	);
};
