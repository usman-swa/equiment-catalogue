enum Status {
	Running = 'Running',
	Stopped = 'Stopped',
}

export interface Equipment {
	number: number;
	address: string;
	startDate: string;
	endDate: string;
	status: Status;
}
