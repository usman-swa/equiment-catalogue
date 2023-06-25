import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { Equipment, data } from './equipment-data';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const validateNumber = (num: string | undefined): number => {
  const numberParam = num ? parseInt(num, 10) : NaN;
  if (isNaN(numberParam)) {
    throw new Error('Number must be a valid number');
  }
  return numberParam;
};

const searchData = (eqNum?: number, limit = 10): Equipment[] => {
  let result = data;
  if (eqNum) {
    result = result.filter((item) => item.number === eqNum);
  }
  if (!result.length) {
    throw new Error('Data not found');
  }
  return result.slice(0, limit);
};

app.get('/equipment/search', (req: Request, res: Response, next: NextFunction) => {
  try {
    const limit = validateNumber(req.query.limit as string);
    const result = searchData(undefined, limit);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.get('/equipment/:equipmentNumber', (req: Request, res: Response, next: NextFunction) => {
  try {
    const equipmentNumber = validateNumber(req.params.equipmentNumber as string);
    const result = searchData(equipmentNumber, 1)[0] ?? null;
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.post('/equipment', (req: Request, res: Response, next: NextFunction) => {
  try {
    const newEquipment: Equipment = req.body;
    const existingEquipment = data.find((equipment) => equipment.number === newEquipment.number);
    if (existingEquipment) {
      throw new Error('Equipment already exists');
    }
    data.push(newEquipment);
    res.json(newEquipment);
  } catch (error) {
    next(error);
  }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
