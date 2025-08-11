import aj from '../config/arcjet.js';

export const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, { requested: 1 });
        console.log("Arcjet decision", decision);

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({error:"Rate limit exceeded"});
            } else if (decision.reason.isBot()) {
                return res.status(403).json({error:"Bot Detected"});
            } else {
                return res.status(403).json({error:"Access Denied"});
            }
        }
        next();
    }
    catch (error) {
        console.log(`Arcjet Middleware Error: ${error}`);
        next(error);
    }
}