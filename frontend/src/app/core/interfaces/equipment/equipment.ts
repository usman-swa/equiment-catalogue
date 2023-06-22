enum Status {
	Running = 'Running',
	Stopped = 'Stopped',
}

export interface Data {
	number: number;
	address: string;
	startDate: string;
	endDate: string;
	status: Status;
}
