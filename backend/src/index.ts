import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

enum Status {
  Running = 'Running',
  Stopped = 'Stopped',
}

interface Equipment {
  number: number;
  status: Status;
  address: string,
  contractStartDate: string,
  contractEndDate: string
}

const data: Equipment[] = [
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

function validateNumber(req: Request): number {
  const numberParam = req.query.number as string;
  if (!numberParam || isNaN(Number(numberParam))) {
    throw new Error('number must be a valid number');
  }
  return Number(numberParam);
}

function searchData(equipmentNumber?: number, limit = 10): Equipment[] {
  const result = data.filter(item => !equipmentNumber || item.number === equipmentNumber);
  if (!result.length) {
    throw new Error('Data not found');
  }
  return result.slice(0, limit);
}

app.get('/equipment/search', (req: Request, res: Response, next: NextFunction) => {
  try {
    const limit = parseInt(req.query.limit as string, 10) || 10;
    const result = searchData(undefined, limit);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.get('/equipment/:equipmentNumber', (req: Request, res: Response, next: NextFunction) => {
  try {
    const equipmentNumber = parseInt(req.params.equipmentNumber as string, 10);
    const result = searchData(equipmentNumber);
    res.json(...result);
  } catch (error) {
    next(error);
  }
});

app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(err.status || 500).send({message: err.message || 'Internal server error'});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
