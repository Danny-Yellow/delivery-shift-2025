export interface Adress {
	apartment: string;
	comment: string;
	house: string;
	street: string;
}

export interface ReceiverAdress extends Adress {
	isNonContact: boolean;
}
