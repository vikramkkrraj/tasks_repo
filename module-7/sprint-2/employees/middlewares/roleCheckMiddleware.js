export const roleChecker = (allowRoles) => {
    return (req,res,next) => {
        const role = req.headers["x-role"];
        if(!role || !allowRoles.includes(role)){
            return res.status(403).json({ messsage : "Forbindden: Access Denied"});
        }
        next();
    };
}