import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
    static init(sequelize) {
        super.init(
            {
                rua: Sequelize.STRING,
                numero: Sequelize.INTEGER,
                nome: Sequelize.STRING,
                complemento: Sequelize.STRING,
                estado: Sequelize.STRING,
                cidade: Sequelize.STRING,
                cep: Sequelize.INTEGER,
            },
            { sequelize }
        );
        return this;
    }
}

export default Recipient;
