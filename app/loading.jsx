import { CircleLoader } from '@/components/shared/CircleLoader';

const LoadingPage = () => {
	return (
		<section className='h-[calc(100vh-350px)] flex justify-center items-center'>
			<CircleLoader />
		</section>
	);
};

export default LoadingPage;
