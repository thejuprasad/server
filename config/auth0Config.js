import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://realestate-backend-5ayj.onrender.com",
    issuerBaseURL: "https://dev-t64jbdl1402nen4m.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck