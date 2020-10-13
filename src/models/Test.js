module.exports = (sequelize, Sequelize) => {
        const { INTEGER, STRING, FLOAT, BOOLEAN, DATE } = Sequelize
        const Test = sequelize.define('Test', {
            Id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            TestName: { type: STRING, primaryKey: true, allowNull: false },
        })
        return Test;
    };
