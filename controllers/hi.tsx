import { Request, Response } from 'express';

const hi = (req: Request, res: Response) => {
  res.json({ hi: 'hi' });
};

module.exports = hi;
