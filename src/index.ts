import { MikroORM } from "@mikro-orm/core";

const main = async () => {
    const orm = await MikroORM.init({
        dbName: 'lireddit',
        user: 'postgres',
        password: 'poomipat00207',
        debug : process.env.NODE_ENV === 'production',
        type: 'postgresql'
    });
};

main();

