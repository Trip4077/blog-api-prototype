const jwt = require( 'jsonwebtoken' );

const authenticateRequest = ( req, res, next ) => {
    const { authorization } = req.headers;

    if( authorization ) {
        const secret = process.env.JWT_SECRET;

        jwt.verify( authorization, secret, (err, decodedToken) => {
            if( err ) {
                res.status( 401 ).json({ message: "Invalid Token" });
            } else {
                req.token = decodedToken;
                next();
            }
        });
    } else {
        res.status( 400 ).json({ message: "Please Login and Try Again" });
    }
}

module.exports = authenticateRequest;