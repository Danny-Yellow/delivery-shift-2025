export interface Adress {
	apartment: string;
	comment: string;
	house: string;
	street: string;
}

export interface AdressWithOptions extends Adress {
	isNonContact: boolean;
}
