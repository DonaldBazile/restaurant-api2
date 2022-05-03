import express from 'express';
import cors from 'cors';
import { addRestaurant, getAllRestaurant} from './src/restaurants.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/restaurants', addRestaurant);
app.get('/restaurants', getAllRestaurant);

app.listen(3000, () => {
    console.log('listening on http://localhost:3000...');
});