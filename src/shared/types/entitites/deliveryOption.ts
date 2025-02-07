export interface DeliveryOption {
	days: number;
	id: string;
	name: string;
	price: number;
	type: 'DEFAULT' | 'EXPRESS';
}
