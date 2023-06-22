import express, { Request, Response } from 'express';
import cors from 'cors';
import createError from 'http-errors';

const app = express();
const port = 3000;

app.use(cors());

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

// Serve static JSON data
app.get('/search', (req: Request, res: Response, next: any) => {
	try {
		const numberParam = req.query.number;
		if (!numberParam) {
			throw createError(400, 'number is required');
		}
		const number = Number(numberParam);
		if (isNaN(number)) {
			throw createError(400, 'number must be a valid number');
		}

		const data: Data[] = [
			{ number: 123, address: '', startDate: '', endDate: '', status: Status.Running },
			{ number: 456, address: '', startDate: '', endDate: '', status: Status.Stopped },
			{ number: 789, address: '', startDate: '', endDate: '', status: Status.Running },
		];

		const result = data.find((item) => item.number === number);
		if (result) {
			res.json(result);
		} else {
			throw createError(404, 'Data not found');
		}
	} catch (error) {
		if (error instanceof createError.HttpError) {
			next(error);
		} else {
			next(createError(500, 'Internal server error'));
		}
	}
});

// Error handler middleware
app.use((err: any, req: Request, res: Response, next: any) => {
	res.status(err.status || 500);
	res.json({
		message: err.message,
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
