import { useState } from 'react';

import type { ToastVariant } from './types';

export const useToast = () => {
	const [toastIsOpened, setToastIsOpened] = useState(false);
	const [toastVariant, setToastVariant] = useState<ToastVariant | null>(null);
	const [toastMessage, settoastMessage] = useState('');

	function openToast(variant: ToastVariant, message: string) {
		setToastVariant(variant);
		setToastIsOpened(true);
		settoastMessage(message);
	}

	function closeToast() {
		setToastIsOpened(false);
	}

	return { openToast, closeToast, toastVariant, toastIsOpened, toastMessage };
};
