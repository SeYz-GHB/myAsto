import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Payment = sequelize.define("Payment",{
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : DataTypes.INTEGER
        },
        order_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        payment_method : {
            type : DataTypes.ENUM("cod", "paypal", "credit_card", "Khqr"),
            allowNull : false
        },
        status : {
            type :DataTypes.ENUM("pending", "paid", "failed"),
            defaultValue : "pending"
            
        },
        transaction_id : {
            type : DataTypes.STRING(255)
        },
        paid_at : {
            type : DataTypes.DATE
        },
        amount : {
            type : DataTypes.DECIMAL(10,2)
        }

    },{tableName : "payments", timestamps : true})
    return Payment;
}