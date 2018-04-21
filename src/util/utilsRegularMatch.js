/**
 * CropImage - RegularMatch
 * https://menger.me
 * @大梦
 */


import {toastShort, consoleLog} from './utilsToast'

const phoneRule = /^1[34578]\d{9}$/;

export const checkPhone = (phone) => {
	let status = phoneRule.test(phone);
	return status;
};