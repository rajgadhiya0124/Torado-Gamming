import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

export const verifyToken  = (req,res,next)=>{

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            success: false,
            message: "Unauthorized Token Required"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
}


export const verifyAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({
            success: false,
            message: "Access denied - Admin only"
        });
    }

    next();
};
// export const verifyToken = (req,res,next)=>{
//     try {
//         const authHeaders = req.headers.authorization;

//         if(!authHeaders){
//             return res.status(401).json({ message: "Token required" });
//         }

//         const Token = authHeaders.split(" ")[1];
        
//         if(!Token){
//             return res.status(401).json({ 
//                 success: false,
//                 message: "Invalid token" 
//             });
//         }

//         const decoded = jwt.verify(Token, process.env.JWT_SECRET);

//         req.user = decoded;
//         next();

//     } catch (error) {
//         console.log("JWT ERROR:", error.message);
//         return res.status(401).json({
//             success: false,
//             message: "Not authorized, invalid token"
//         });
//     }
// }