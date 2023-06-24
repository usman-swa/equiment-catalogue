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

interface Data {
  number: number;
  status: Status;
}

const data: Data[] = [
  { number: 123, status: Status.Running },
  { number: 456, status: Status.Stopped },
  { number: 789, status: Status.Running },
  { number: 101, status: Status.Running },
  { number: 111, status: Status.Running },
  { number: 213, status: Status.Running },
  { number: 141, status: Status.Running },
  { number: 516, status: Status.Running },
  { number: 171, status: Status.Running },
  { number: 192, status: Status.Running },
];

function validateNumber(req: Request): number {
  const numberParam = req.query.number as string;
  if (!numberParam || isNaN(Number(numberParam))) {
    throw new Error('number must be a valid number');
  }
  return Number(numberParam);
}

function searchData(equipmentNumber?: number, limit = 10): Data[] {
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
    res.json(result);
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
