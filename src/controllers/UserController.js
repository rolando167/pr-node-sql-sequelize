const User = require('../models/User');
const sequelize = require('../config/database');

exports.showAll = async (req, res) => {
    try {
        const users = await User.findAll({
            order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['id', 'DESC'],
            ]
        });

        console.log('Lista de Usuarios ✔️');

        res.json(users);
    } catch (error) {
        throw new Error('noooo 😞');
    }
}

exports.search = async(req, res) => {
    try {
        const  { id } = req.params;
        const user = await User.findOne({
            where: {
                id
            }
        });
        if(user){
            console.log(`Usuario encontrado ▶️  ${user.name}`);
        }
        res.json(user);

    } catch (error) {
        throw new Error('noooo 😞');
    }
}

exports.queryRaw = async(req, res) => {
    try {
        const query = 'select *  from cia where state = 1';

        // const users = await sequelize.query(query, { type: QueryTypes.SELECT });
        const projects = await sequelize.query('SELECT * FROM cia', {
            // model: User,
            mapToModel: true // pass true here if you have any mapped fields
          });

        // console.log(await sequelize.query('SELECT * FROM cia', { raw: true }));

        res.json(projects);

    } catch (error) {
        throw new Error('noooo 😞');
    }
}


exports.queryRawSP = async(req, res) => {
    try {
        const usuarios = await sequelize.query('exec SP_getUsers', { raw: true });
        res.json({usuarios: usuarios[0], total: usuarios[1]});

    } catch (error) {
        throw new Error('noooo 😞');
    }
}