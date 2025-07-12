import express from 'express';

const router = express.Router();

// Welcome route
router.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: 'Welcome to REST API!',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      users: '/api/users',
      docs: '/api/docs (coming soon)'
    }
  });
});

// API info route
router.get('/info', (req, res) => {
  res.json({
    success: true,
    data: {
      name: 'Express REST API',
      version: '1.0.0',
      description: 'A production-ready REST API built with Express.js',
      author: 'Your Name',
      node_version: process.version,
      environment: process.env.NODE_ENV || 'development'
    }
  });
});

export default router;