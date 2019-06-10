import Mongoose = require("mongoose");
//import {DataAccess} from '../../DataAccess';

import {IUserModel} from '../interfaces/IUserModel';

//let mongooseConnection = DataAccess.mongooseConnection;
//let mongooseObj = DataAccess.mongooseInstance;

class UserModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    private createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                userID :String,
                firstName : String,
                lastName : String,
                email : String,
                username:String,
                role :String
            }, {collection: 'user'}
        );
    }

    private createModel(): void {
        this.model = Mongoose.model<IUserModel>("user", this.schema);
    }

    public getUser(query:any):any{
        // to be implemented
    }

    public addUser():void{
        // to be implemented

    }
  

}
export {UserModel};
