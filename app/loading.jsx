import { CircleLoader } from '@/components/shared/CircleLoader';

const Loading = () => {
	return (
		<section className='h-[calc(100vh-220px)] flex justify-center items-center'>
			<CircleLoader />
		</section>
	);
};

export default Loading;
