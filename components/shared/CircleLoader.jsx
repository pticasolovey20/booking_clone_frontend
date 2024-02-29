'use client';

import { TailSpin } from 'react-loader-spinner';

export const CircleLoader = () => {
	return (
		<TailSpin
			radius='1'
			height='40'
			width='40'
			visible={true}
			color='#222222'
			ariaLabel='tail-spin-loading'
		/>
	);
};
