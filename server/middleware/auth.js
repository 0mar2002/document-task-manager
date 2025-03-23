// middleware/auth.js
export const requireRole = (role) => {
    return (req, res, next) => {
      const userRole = req.headers["x-user-role"]; // simulate role via header
  
      if (userRole === role) {
        next();
      } else {
        res.status(403).json({ message: "Access denied: insufficient role" });
      }
    };
  };
  