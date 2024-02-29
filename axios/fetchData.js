import { axiosInstance } from './instance';

export const fetchRooms = async () => {
	try {
		const response = await axiosInstance.get('/api/rooms');
		return response.data;
	} catch (error) {
		throw new Error('An unexpected error occured');
	}
};

export const fetchCatgories = async () => {
	try {
		const response = await axiosInstance.get('/api/categories');
		return response.data;
	} catch (error) {
		throw new Error('An unexpected error occured');
	}
};
