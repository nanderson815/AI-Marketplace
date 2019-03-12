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
        price: {
            type: DataTypes.DECIMAL(13,2),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING
        },
        classes: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
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
