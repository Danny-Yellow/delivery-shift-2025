import { FakeDash, Group, InputOtp, Slot } from '@src/shared/ui';

import type { OTPInputProps } from './types';

export const OTPCode = (props: OTPInputProps) => {
	if ('children' in props) {
		throw new Error('OTPCode не поддерживает children, только render.');
	}
	return (
		<InputOtp
			{...props}
			render={({ slots }) => (
				<Group>
					{slots.slice(0, 3).map((slot, idx) => (
						<Slot key={idx} {...slot} />
					))}
					<FakeDash />
					{slots.slice(3).map((slot, idx) => (
						<Slot key={idx} {...slot} />
					))}
				</Group>
			)}
			maxLength={6}
		/>
	);
};
