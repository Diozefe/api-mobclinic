import { Connection, createConnection, getConnection } from "typeorm";
export function connectionDB(){
    new Promise(async (resolve, reject)=>{
        try {
            let connection: Connection = getConnection();
            if(connection && connection.isConnected) {
                return resolve(connection);
            } 
            connection = await createConnection();
            return resolve(connection)
            
        } catch (error) {
            return reject(error);
        }
    });
}