import { Client, Databases, Account } from "appwrite";

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const collectionNotesId = import.meta.env.VITE_APPWRITE_COLLECTION_NOTES_ID;
 
const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId);
 
const databases = new Databases(client);
const account = new Account(client);
 
export { client, databases, account, databaseId, collectionNotesId as collectionId };
