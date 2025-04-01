import type { ComponentProps, ReactNode } from 'react';

import clsx from 'clsx';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import styles from './styles.module.scss';

interface ModalContextType {
	hideModal: () => void;
	showModal: (modal: ReactNode) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [modalContent, setModalContent] = useState<ReactNode>(null);

	const showModal = (modal: ReactNode) => {
		setModalContent(modal);
	};

	const hideModal = () => {
		setModalContent(null);
	};

	const value = useMemo(() => ({ showModal, hideModal }), []);

	return (
		<ModalContext.Provider value={value}>
			{children}
			{modalContent}
		</ModalContext.Provider>
	);
};

export const Modal = ({ isOpen, children }: { isOpen: boolean; children: ReactNode }): null => {
	const { hideModal, showModal } = useContext(ModalContext);

	useEffect(() => {
		isOpen ? showModal(children) : hideModal();
	}, [isOpen]);

	return null;
};

export const ModalViewport = ({
	children,
	onClose,
	...props
}: ComponentProps<'div'> & { onClose: () => void }) => {
	const { hideModal } = useContext(ModalContext);

	return (
		<div className={styles.modal} {...props}>
			{children}
			<div
				className={styles.background}
				onClick={() => {
					onClose();
					hideModal();
				}}
			/>
		</div>
	);
};

export const ModalContent = ({ className, ...props }: ComponentProps<'div'>) => {
	return <div className={clsx(styles.content, className)} {...props} />;
};

export const ModalHeader = ({ className, ...props }: ComponentProps<'div'>) => {
	return <div className={clsx(styles.header, className)} {...props} />;
};

export const ModalBody = ({ className, ...props }: ComponentProps<'div'>) => {
	return <div className={clsx(styles.body, className)} {...props} />;
};
