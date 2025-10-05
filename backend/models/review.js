import { DataTypes } from "sequelize";

export default(sequelize) => {
    const Review = sequelize.define("Review", {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
        },
        product_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        user_id : {
            type : DataTypes.INTEGER,
            allowNull : false,

        },
        rating : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : {
                min : 1,
                max : 5
            }

        },
        comment : {
            type : DataTypes.TEXT
        }
    }, {tableName : "reviews", timestamps : true})
    return Review;
}