import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Product = sequelize.define("Product", {
        id : {
            autoIncrement : true,
            type : DataTypes.INTEGER,
            primaryKey : true
        },
        name : {
            type : DataTypes.STRING(50),
            allowNull : false,
        },
        description : {
            type : DataTypes.TEXT,
        },
        price : {
            type : DataTypes.DECIMAL(10,2),
            allowNull : false,
        },
        stock : {
            type : DataTypes.ENUM('Available', 'Low Stock', 'Out of Stock'),
            defaultValue : "Available",
            allowNull: false
        },
        category_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        brand_id : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        warranty: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: "1 Year"
        },

    },
    {
        tableName : "products",
        timestamps : true,
        // REMOVE these lines - they were causing the mapping issue:
        // createdAt: 'created_at',  ← Remove this
        // updatedAt: 'updated_at',  ← Remove this
        indexes : [
            {fields : ['brand_id']},
            {fields : ['category_id']},
            {fields : ['brand_id', 'category_id']},
            {fields : ['createdAt']}  // This is correct now
        ]
    });
    return Product;
}