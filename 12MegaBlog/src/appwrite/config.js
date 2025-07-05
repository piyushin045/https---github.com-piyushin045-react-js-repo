import conf from '../conf/conf.js'

import { Client, ID,Databases,Storage,Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;
    // account tab banega jab constructor call ho
    
    constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
                this.databases = new Databases(this.client);
                this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featureImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // document id or we can use id.unique
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId,

                }

            )
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error",error);
            
        }
    }

    async updatePost(slug,{title,content,featureImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    
                }
            )
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error",error);

        }

    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
            )      
            return true;      
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error",error);
            return false
        }
    }


    async getPost(slug){
        try {
          return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error",error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
               

            )
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error",error);
            return false
        }
    }

    // file upload methord/service
    // here while uploading the file we have to do actual blog not just its name


    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error",error);
            return false
        }
    }

    // while deleting the file we have to give the fileId
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error",error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }

}


const service = new Service()
export default service