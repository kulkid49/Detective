import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import generateCase from './api/generate-case.js';
import interrogate from './api/interrogate.js';
import generatePortrait from './api/generate-portrait.js';

dotenv.config({ path: '.env.local' }); // Vercel uses .env.local usually, let's also try .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Simulate Vercel Serverless Functions
app.post('/api/generate-case', async (req, res) => {
  try {
    await generateCase(req, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Local server error' });
  }
});

app.post('/api/interrogate', async (req, res) => {
  try {
    await interrogate(req, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Local server error' });
  }
});

app.post('/api/generate-portrait', async (req, res) => {
  try {
    await generatePortrait(req, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Local server error' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Local dev server running on http://localhost:${PORT}`);
});
