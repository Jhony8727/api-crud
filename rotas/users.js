import express from 'express'
import { v4 as uuid } from 'uuid';
const router = express.Router();

const users =[
  {
    first_name: 'Jhony',
    last_name: 'Wesley',
    email: 'jhon-y-19@hotmail.',
  }, 
  {
    first_name: 'Rodrigo',
    last_name: 'Silva',
    email: 'rodrigopinheiro0101@gmail.com',
  }, 
];

router.get('/', (req, res) => {
    res.send(users);
})

router.post('/', (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4() });

    res.send('${...user.first_name} has been added to the Database');
})





export default router