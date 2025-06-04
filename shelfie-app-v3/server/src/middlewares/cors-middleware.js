export const corsMiddleware = (req,res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Or specify domains
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Authorization');
    next()
}