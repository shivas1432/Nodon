import { Router } from 'express';

const router = Router();

// Welcome route
router.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: 'Welcome to TypeScript REST API!',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      users: '/api/users',
      info: '/api/info'
    }
  });
});

// API info route
router.get('/info', (req, res) => {
  res.json({
    success: true,
    data: {
      name: 'Express REST API with TypeScript',
      version: '1.0.0',
      description: 'A production-ready REST API built with Express.js and TypeScript',
      author: 'Your Name',
      node_version: process.version,
      environment: process.env.NODE_ENV || 'development'
    }
  });
});

export default router;