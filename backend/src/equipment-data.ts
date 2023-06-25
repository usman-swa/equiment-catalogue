export enum Status {
    Running = 'Running',
    Stopped = 'Stopped',
  }
  
  export interface Equipment {
    number: number;
    status: Status;
    address: string,
    contractStartDate: string,
    contractEndDate: string
  }
  
  export const data: Equipment[] = [
    { number: 123, status: Status.Running, address: '123 NY', contractStartDate: '10.10.2020', contractEndDate: '10.10.2021' },
    { number: 456, status: Status.Stopped, address: '456 NY', contractStartDate: '10.10.2019', contractEndDate: '10.10.2020' },
    { number: 789, status: Status.Running, address: '789 NY', contractStartDate: '10.10.2018', contractEndDate: '10.10.2019' },
    { number: 101, status: Status.Running, address: '101 NY', contractStartDate: '10.10.2017', contractEndDate: '10.10.2018' },
    { number: 111, status: Status.Running, address: '111 NY', contractStartDate: '10.10.2016', contractEndDate: '10.10.2017' },
    { number: 213, status: Status.Running, address: '213 NY', contractStartDate: '10.10.2015', contractEndDate: '10.10.2016' },
    { number: 141, status: Status.Running, address: '141 NY', contractStartDate: '10.10.2014', contractEndDate: '10.10.2015'},
    { number: 516, status: Status.Running, address: '516 NY', contractStartDate: '10.10.2013', contractEndDate: '10.10.2014' },
    { number: 171, status: Status.Running, address: '171 NY', contractStartDate: '10.10.2012', contractEndDate: '10.10.2013' },
    { number: 192, status: Status.Running, address: '192 NY', contractStartDate: '10.10.2011', contractEndDate: '10.10.2012' },
  ];