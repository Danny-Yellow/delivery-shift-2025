import type { ComponentProps } from 'react';

import clsx from 'clsx';
import { OTPInput, type SlotProps } from 'input-otp';

import styles from './styles.module.scss';

export const FakeCaret = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={clsx(className, styles.caret)} {...props} />
);

export const FakeDash = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={clsx(className, styles.dash)} {...props} />
);

export const Slot = ({
	className,
	char,
	isActive,
	hasFakeCaret,
	placeholderChar,
	...props
}: SlotProps & ComponentProps<'div'>) => (
	<div
		className={clsx(
			className,
			styles.slot,
			isActive && styles.slot_active,
			!!char && styles.slot_char,
		)}
		{...props}
	>
		{char}
		{hasFakeCaret && <FakeCaret />}
	</div>
);

export const Group = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={clsx(className, styles.slots)} {...props} />
);

export const InputOtp = OTPInput;
