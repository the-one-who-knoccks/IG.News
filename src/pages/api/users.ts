import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => { 
  const users = [
    { id: 1, name: 'Thiago'},
    { id: 2, name: 'Rui'},
    { id: 3, name: 'Luiz Fernando'},
  ]

  return res.json(users);
}