import aj from '../config/arcjet.js';
import {isSpoofedBot} from "@arcjet/inspect";

export const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req,{requested:1});
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
        else if (decision.ip.isHosting()) {
            res.writeHead(403, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Forbidden" }));
        } else if (decision.results.some(isSpoofedBot)) {
            res.writeHead(403, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Forbidden" }));
        }
        next();
    }
    catch (error) {
        console.log(`Arcjet Middleware Error: ${error}`);
        next(error);
    }
}