export const authorizeRoles = (...allowedRoles) => {
    return (req,res,next) => {
        if(!req.user || !req.user.role) {
            return res.status(401).json({
                message : "Authetication required. Please log in",
            })
        }
        const userRole = req.user.role;
    
        if(!allowedRoles.includes(userRole)) {
            return res.status(403).json({
                message :`Acess denied. Role ${userRole} is not permitted.`
            });
        }
    
        next();
    }
}