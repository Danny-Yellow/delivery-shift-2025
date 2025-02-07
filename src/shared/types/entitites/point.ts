export interface PointCoordinates {
	latitude: number;
	longitude: number;
}

export interface Point extends PointCoordinates {
	id: string;
	name: string;
}
