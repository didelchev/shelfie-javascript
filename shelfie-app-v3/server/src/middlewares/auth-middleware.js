import jwt from 'jsonwebtoken'

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies['auth']
    const JWT_SECRET = process.env.JWT_SECRET
    

    if(!token){
        next()
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded
        req.isAuthenticated = true
        next()

    }catch(err){
        return res.status(401).json({message: 'Invalid token !'})

    }
}