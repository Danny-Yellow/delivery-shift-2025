import clsx from 'clsx';
import { type Component, type ComponentProps, useRef } from 'react';

import styles from './styles.module.scss';

interface InputProps extends Omit<ComponentProps<'input'>, 'size'> {
	component?: Component;
	hasError?: boolean;
	size?: 'full';
}

export const Input = ({ className, size = 'full', hasError = false, ...props }: InputProps) => (
	<input
		className={clsx(styles.input, styles[size], hasError && styles.error, className)}
		type="text"
		{...props}
	/>
);

export const InputLabel = ({ className, ...props }: ComponentProps<'label'>) => (
	<label className={clsx(className, styles.label)} {...props} />
);

export const InputWithPrefix = ({
	prefix,
	onChange,
	...props
}: InputProps & { prefix: string }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (!prefix) {
			onChange(event);
			return;
		}

		const startCursorPosition = inputRef.current.selectionStart;
		const endCursorPosition = inputRef.current.selectionEnd;

		const value = event.target.value;

		const selectedAll = startCursorPosition === 0 && endCursorPosition === value.length;

		if (startCursorPosition < prefix.length && value.length !== 1 && !selectedAll) {
			return;
		}

		if (value.length === 1) {
			event.target.value = prefix + value;
		}

		if (value === prefix) event.target.value = '';

		onChange(event);
	}

	return <Input ref={inputRef} onChange={handleChange} {...props} />;
};
