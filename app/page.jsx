import { Header } from '@/components/ui/Header';
import { Navbar } from '@/components/shared/header/Navbar';
import { SearchBar } from '@/components/shared/header/SearchBar';
import { CategoryBar } from '@/components/shared/categories/CategoryBar';

import { CardList } from '@/components/shared/cards/CardList';
import { Footer } from '@/components/ui/Footer';

const HomePage = () => {
	return (
		<div className='h-full flex flex-col'>
			<Header>
				<Navbar />
				<SearchBar />
				<CategoryBar />
			</Header>

			<main className='flex-1 mt-48 mb-8 px-8 xxl:px-20'>
				<CardList />
			</main>

			<Footer styles='max-w-[1300px] xl:px-20' />
		</div>
	);
};

export default HomePage;
