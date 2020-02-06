import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
    const { authentication } = req.headers;
    if (!authentication) {
        return res.status(400).json({ error: 'token not provided' });
    }
    const [, token] = authentication.split(' ');
    try {
        const decode = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = decode.id;

        next();
    } catch (err) {
        return res.status(401).json({ error: 'token not valid' });
    }
};
