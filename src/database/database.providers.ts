import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { UserEntity } from 'src/user/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'userservice',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: process.env.DB_DIALECT as Dialect,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        define:{
          timestamps:false
        }        
      });
    sequelize.addModels([UserEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];