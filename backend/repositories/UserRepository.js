class UserRepository {
    constructor(db) {
        this.db = db;
    }
    async findByEmail(email, attributes = null) {
        return await this.db.User.findOne({
            where : {email},
            attributes: ["id", "email", "name", "is_verified", "role"]
        })
    }

    async findByPk(userID) {
        return await this.db.user.findByPk({userID});
    }
    
}

export default UserRepository;