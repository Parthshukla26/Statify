import express from 'express';
import cors from 'cors';
import githubRoutes from './routes/githubRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api', githubRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});