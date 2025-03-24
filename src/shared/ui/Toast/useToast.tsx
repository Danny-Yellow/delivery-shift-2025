import { useState } from 'react';

import type { Variant } from './types';

export const useToast = () => {
	const [toastIsOpened, setToastIsOpened] = useState(false);
	const [toastVariant, setToastVariant] = useState<Variant | null>(null);
	const [toastMessage, settoastMessage] = useState('');

	function openToast(variant: Variant, message: string) {
		setToastVariant(variant);
		setToastIsOpened(true);
		settoastMessage(message);
	}

	function closeToast() {
		setToastIsOpened(false);
	}

	return { openToast, closeToast, toastVariant, toastIsOpened, toastMessage };
};
