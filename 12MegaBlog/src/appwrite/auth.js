import conf from '../conf/conf.js'

import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

    }

    async createAccount({email,password,name}){
        try {
           const userAccount = await this.account.create(ID.unique(),email,password,name); 
           // first we have to check wheaher user account has been created or not
           if (userAccount) {
            // call another methord
                this.login({email,password});
           } else {
            return userAccount;
           }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
           return  await this.account.get();
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error",error);
        }

        return null;
    }

    async logout(){

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("appwrite service :: logout :: error",error);
        }
    }
}

const authService = new AuthService()


export default authService





// if any change happens in the backed this changes will be implemented in these file only
