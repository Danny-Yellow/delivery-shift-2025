export interface Address {
	apartment: string;
	comment: string;
	house: string;
	street: string;
}

export interface ReceiverAddress extends Address {
	isNonContact: boolean;
}
