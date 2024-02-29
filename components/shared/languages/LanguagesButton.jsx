'use client';

import { useAppContext } from '@/context/AppContext';
import { FiGlobe } from 'react-icons/fi';

export const LanguagesButton = () => {
	const { handleLanguageModalOpen } = useAppContext();

	return (
		<button
			onClick={handleLanguageModalOpen}
			className='p-3 rounded-full duration-300 hover:bg-secondary cursor-pointer'
		>
			<FiGlobe />
		</button>
	);
};
