// 404 Route Not Found Middleware
export const notFound = (req, res, next) => {
  const error = new Error(`API Endpoint Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Global Centralized Error Handler Middleware
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  console.error(`❌ [Error ${statusCode}] ${req.method} ${req.originalUrl}:`, err.message);

  let errorMessage = err.message || 'Internal Server Error';
  let errors = [];

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    errorMessage = `Resource not found with invalid id format`;
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    errorMessage = 'Duplicate field value entered in database';
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    errorMessage = 'Database validation error';
    errors = Object.values(err.errors).map(val => val.message);
  }

  res.status(statusCode).json({
    success: false,
    message: errorMessage,
    errors: errors.length > 0 ? errors : undefined,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};
