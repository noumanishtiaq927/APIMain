  
import { connect } from 'mongoose'
import { dbHost, dbName, dbPassword, dbUser } from '../utils/constants'

export class MongoDb {
  constructor() {}
    
  connectionUri:string = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`
  connect() {
  
  
    connect(this.connectionUri, {useUnifiedTopology: true,  useNewUrlParser: true , useFindAndModify: false} , (err: any) => {
      if (err) {
        console.log(err);
        console.log('database connection failed');
      } else {
        console.log('connected with database');
      }
    });
  }
}
