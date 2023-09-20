const {MongoClient} = require('mongodb')

async function main() {
    // const url = "mongodb+srv://oyu20001:Zoloo0527@cluster0.zpweeeh.mongodb.net/?retryWrites=true&w=majority";

    const client= new MongoClient(url);

    try {
        await client.connect(); 

        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`-${db.name}`);
    })
}