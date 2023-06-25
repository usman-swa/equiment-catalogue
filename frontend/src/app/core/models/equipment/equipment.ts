export enum Status {
	Running = 'Running',
	Stopped = 'Stopped',
}

export interface Equipment {
	number: number;
	address: string;
	contractStartDate: string;
	contractEndDate: string;
	status: Status;
}
