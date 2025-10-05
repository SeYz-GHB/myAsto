import { DataTypes } from "sequelize";

export default (sequelize) =>{
    const OrderItem = sequelize.define("OrderItem", {
        id : {
            primaryKey : true, 
            autoIncrement : true,
            type : DataTypes.INTEGER
        },
        order_id : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        product_id : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        quantity : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        price : {
            type : DataTypes.DECIMAL(10,2),
            allowNull : false,
        },
        name : {
            type : DataTypes.STRING(255),
            allowNull : false 
        },



    }, {tableName : "order_items", timestamps : true});
    return OrderItem;
}