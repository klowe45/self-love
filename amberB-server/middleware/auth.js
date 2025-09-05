const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

function requireAuth(req, res, next) {
  const hdr = req.headers.authorization || "";
  const [, token] = hdr.split(" ");
  if (!token) return res.status(401).json({ message: "Missing token" });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = { id: payload.sub };
    next();
  } catch {
    return res.status(401).json({ message: "Invaild token" });
  }
}

module.exports = { requireAuth };
