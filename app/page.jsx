'use client';

import { Suspense } from 'react';
import { useAppContext } from '@/context/AppContext';
import { AnimatePresence } from 'framer-motion';

import { Header } from '@/components/ui/Header';
import { Navbar } from '@/components/shared/Navbar';
import { SearchBar } from '@/components/shared/SearchBar';
import { CategoryBar } from '@/components/shared/categories/CategoryBar';

import { CardSkeleton } from '@/components/shared/cards/CardSkeleton';
import { CardList } from '@/components/shared/cards/CardList';
import { Modal } from '@/components/ui/modal/Modal';
import { FiltersContent } from '@/components/shared/filters/FiltersContent';
import { Button } from '@/components/ui/Button';

import { Footer } from '@/components/ui/Footer';

const HomePage = () => {
	const { isModalOpen, handleModalClose } = useAppContext();

	return (
		<div className='h-full flex flex-col overflow-hidden'>
			<Header>
				<Navbar />
				<SearchBar />
				<CategoryBar />
			</Header>

			<main className='h-full flex flex-col gap-16 mt-48 mb-8 px-8 xxl:px-20'>
				<Suspense fallback={<CardSkeleton amount={4} />}>
					<CardList />
				</Suspense>

				<AnimatePresence initial={false} mode='wait'>
					{isModalOpen && (
						<Modal handleClose={handleModalClose} label='Filters' content={<FiltersContent />} />
					)}
				</AnimatePresence>

				<div className='w-full flex flex-col items-center justify-center gap-4'>
					<Button
						label='Show more'
						styles={[
							'text-white font-semibold',
							'py-3 px-6 rounded-lg transition-all',
							'duration-300 bg-black/85 hover:bg-black',
						]}
					/>
				</div>
			</main>

			<Footer styles='max-w-[1300px] xl:px-20' />
		</div>
	);
};

export default HomePage;
