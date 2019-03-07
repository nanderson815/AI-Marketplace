module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Product;
};