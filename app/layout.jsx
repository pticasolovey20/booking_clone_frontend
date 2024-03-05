import { Poppins } from 'next/font/google';
import { QueryProvider } from '@/providers/QueryProvider';
import { AppContextProvider } from '@/context/AppContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { cn } from '@/utils';

import { Header } from '@/components/shared/header/Header';
import { Navbar } from '@/components/shared/header/Navbar';
import { SearchBar } from '@/components/shared/header/SearchBar';
import { CategoryBar } from '@/components/shared/categories/CategoryBar';

import { FilterModal } from '@/components/shared/filters/FilterModal';
import { LanguageModal } from '@/components/shared/languages/LanguageModal';

import { Footer } from '@/components/shared/footer/Footer';
import { SupportLinks } from '@/components/shared/footer/SupportLinks';
import { FooterLinks } from '@/components/shared/footer/FooterLinks';
import { AuthModal } from '@/components/shared/auth/AuthModal';

import './globals.css';

const font = Poppins({
	subsets: ['latin'],
	weight: ['400'],
});

export const metadata = {
	title: 'Airbnb Clone',
	description: 'Application built on Next-JS 14',
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body
				className={cn(font.className, 'min-h-[100dvh] flex flex-col')}
				suppressHydrationWarning={true}
			>
				<QueryProvider>
					<AppContextProvider>
						<Header>
							<Navbar />
							<SearchBar />
							<CategoryBar />
							<FilterModal />
							<LanguageModal />
							<AuthModal />
						</Header>

						<main className='flex-1 flex flex-col gap-16 mt-4 mb-12 px-8 xxl:px-20'>
							{children}
						</main>

						<Footer>
							<SupportLinks />
							<FooterLinks />
						</Footer>
					</AppContextProvider>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryProvider>
			</body>
		</html>
	);
};

export default RootLayout;
