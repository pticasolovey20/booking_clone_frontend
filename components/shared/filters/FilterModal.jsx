'use client';

import { useAppContext } from '@/context/AppContext';
import { AnimatePresence } from 'framer-motion';

import { Modal } from '@/components/shared/modal/Modal';
import { Filters } from '@/components/shared/filters/Filters';

export const FilterModal = () => {
	const { isFilterModalOpen, handleFilterModalClose } = useAppContext();

	return (
		<AnimatePresence initial={false} mode='wait'>
			{isFilterModalOpen && (
				<Modal handleClose={handleFilterModalClose} label='Filters' content={<Filters />} />
			)}
		</AnimatePresence>
	);
};
