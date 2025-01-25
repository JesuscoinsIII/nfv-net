import express from 'express';
import volunteerRoutes from './routes/volunteer.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount volunteer routes under /volunteer
app.use('/volunteer', volunteerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});