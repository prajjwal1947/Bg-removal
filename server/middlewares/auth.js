import jwt from "jsonwebtoken";



const authUser = async (req, res, next) => {
    try {
      const { token } = req.headers;
      if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized" });
      }
  
      const token_decode = jwt.decode(token);
      
      // Ensure req.body is defined
      req.body = req.body || {};
      req.body.clerkId = token_decode.clerkId;
  
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


export default authUser