import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class AuthHandler {
    hashPassword(plainTextPassword: string, saltRounds: number = 10) {
        return bcrypt.hashSync(plainTextPassword, saltRounds)
    }

    comparePassword(plainTextPassword: string, hash: string) {
        return bcrypt.compareSync(plainTextPassword, hash)
    }

    generateToken(data: Object) {
        return jwt.sign(data, 'secret_key', {
            expiresIn: "24h"
        })
    }

    verifyToken(token: string) {
        return jwt.verify(token, 'secret_key')
    }
}

export default new AuthHandler()