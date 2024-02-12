import { Poppins } from 'next/font/google';
import './globals.css';

const font = Poppins({
	subsets: ['latin'],
	weight: ['300'],
});

export const metadata = {
	title: 'Airbnb Clone',
	description: 'Application buit on Next JS',
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body className={font.className} suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
