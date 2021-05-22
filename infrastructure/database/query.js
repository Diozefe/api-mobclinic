class Query {
    Create(schema, data){
        return new Promise(async (resolve, reject)=>{
            try {
                const results = await schema.create(data)
                resolve(results)
            } catch (error) {
                reject(error)
            }
        })
    }
    FindOne(schema, email){
        return new Promise(async (resolve, reject)=>{
            try {
                const results = await schema.findOne({email})
                resolve(results)
            } catch (error) {
                reject(error)
            }
        })
    }
}
module.exports = new Query