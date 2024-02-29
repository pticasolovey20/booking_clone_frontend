import { NextResponse } from 'next/server';

const rooms = [
	{
		id: 1,
		title: 'Tiny home in Mătișești, Romania',
		rate: '4.79',
		viewes: '13,694',
		total: '1,650',
		galleryImages: [
			{
				id: 1,
				source: '/rooms/romania_first.webp',
				alt: 'romania_first',
			},
			{
				id: 2,
				source: '/rooms/romania_second.webp',
				alt: 'romania_second',
			},
			{
				id: 3,
				source: '/rooms/romania_third.webp',
				alt: 'romania_third',
			},
			{
				id: 4,
				source: '/rooms/romania_fourth.webp',
				alt: 'romania_fourth',
			},
			{
				id: 5,
				source: '/rooms/romania_fifth.webp',
				alt: 'romania_fifth',
			},
		],
	},
	{
		id: 2,
		title: 'Private room in hostel in India',
		rate: '4.98',
		viewes: '18,816',
		total: '1,593',
		galleryImages: [
			{
				id: 1,
				source: '/rooms/india_first.webp',
				alt: 'india_first',
			},
			{
				id: 2,
				source: '/rooms/india_second.webp',
				alt: 'india_second',
			},
			{
				id: 3,
				source: '/rooms/india_third.webp',
				alt: 'india_third',
			},
			{
				id: 4,
				source: '/rooms/india_fourth.webp',
				alt: 'india_fourth',
			},
			{
				id: 5,
				source: '/rooms/india_fifth.webp',
				alt: 'india_fifth',
			},
		],
	},
];

export const GET = async () => NextResponse.json(rooms);
