import { DataTypes } from "sequelize";

export default (sequelize) => {
    const ProductFeature = sequelize.define("ProductFeature", {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey  : true,
        },
        feature_name : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        feature_value : {
            type : DataTypes.STRING(255),
            allowNull : false
        },
        product_id : {
            type: DataTypes.INTEGER,
            allowNull : true,
        }
    },{tableName : "product_features",timestamps : false});
    return ProductFeature;
}