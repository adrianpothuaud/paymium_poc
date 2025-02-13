import * as axios from "axios";
import * as fs from "fs";

const fetchCollection = (collectionId: string, fileName: string) => {
    const options = {
        method: 'GET',
        maxBodyLength: Infinity,
        url: `https://api.getpostman.com/collections/${collectionId}`,
        headers: {
            'X-Api-Key': process.env.POSTMAN_PERSONAL_API_TOKEN
        }
    };

    axios.default.request(options)
        .then(response => {
            const { data } = response;
            const { collection } = data;
            fs.writeFileSync(`postman/tmp/${fileName}.json`, JSON.stringify(collection, null, 2));
        })
        .catch(error => {
            console.error(error);
        });
}

const fetchEnvironment = () => {
    const options = {
        method: 'GET',
        maxBodyLength: Infinity,
        url: `https://api.getpostman.com/environments/${process.env.POSTMAN_ENVIRONMENT_ID}`,
        headers: {
            'X-Api-Key': process.env.POSTMAN_PERSONAL_API_TOKEN
        }
    };

    axios.default.request(options)
        .then(response => {
            const { data } = response;
            const { environment } = data;
            fs.writeFileSync("postman/tmp/environment.json", JSON.stringify(environment, null, 2));
        })
        .catch(error => {
            console.error(error);
        });
}

fetchCollection(process.env.POSTMAN_ONBOARDING_COLLECTION_ID, "collection_onboarding")
fetchCollection(process.env.POSTMAN_USER_ACCOUNT_COLLECTION_ID, "collection_user_account")
fetchEnvironment()