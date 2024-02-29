'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
	const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
	const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
	const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

	const handleFilterModalOpen = () => setIsFilterModalOpen(true);
	const handleFilterModalClose = () => setIsFilterModalOpen(false);

	const handleLanguageModalOpen = () => setIsLanguageModalOpen(true);
	const handleLanguageModalClose = () => setIsLanguageModalOpen(false);

	const handleSignInModalOpen = () => setIsSignInModalOpen(true);
	const handleSignInModalClose = () => setIsSignInModalOpen(false);

	const handleSignUpModalOpen = () => setIsSignUpModalOpen(true);
	const handleSignUpModalClose = () => setIsSignUpModalOpen(false);

	return (
		<AppContext.Provider
			value={{
				isFilterModalOpen,
				handleFilterModalOpen,
				handleFilterModalClose,
				isLanguageModalOpen,
				handleLanguageModalOpen,
				handleLanguageModalClose,
				isSignInModalOpen,
				handleSignInModalOpen,
				handleSignInModalClose,
				isSignUpModalOpen,
				handleSignUpModalOpen,
				handleSignUpModalClose,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
