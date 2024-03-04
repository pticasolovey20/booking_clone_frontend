'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
	const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

	const handleFilterModalOpen = () => setIsFilterModalOpen(true);
	const handleFilterModalClose = () => setIsFilterModalOpen(false);

	const handleLanguageModalOpen = () => setIsLanguageModalOpen(true);
	const handleLanguageModalClose = () => setIsLanguageModalOpen(false);

	const handleAuthModalOpen = () => setIsAuthModalOpen(true);
	const handleAuthModalClose = () => setIsAuthModalOpen(false);

	return (
		<AppContext.Provider
			value={{
				isFilterModalOpen,
				handleFilterModalOpen,
				handleFilterModalClose,
				isLanguageModalOpen,
				handleLanguageModalOpen,
				handleLanguageModalClose,
				isAuthModalOpen,
				handleAuthModalOpen,
				handleAuthModalClose,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
