import { IDataObject, IExecuteFunctions, INodeProperties } from "n8n-workflow";
import { OvhCloudApiSecretName, OvhCredentialsType, signRequestOptions } from "../../../../credentials/OvhCloudApi.credentials";

// const showOnlyForMeGet = {
//     resource: ['me'],
//     operation: ['get'],
// };

export const getDescription: INodeProperties[] = [

];

export const getMethods = {};

export async function getMe(
    this: IExecuteFunctions,
    option: IDataObject = {}
) {
    const credentials = await this.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;

    const options = Object.assign(signRequestOptions.call(this, credentials, {
        method: 'GET',
        url: `/me`,
        qs: {},
        json: true,
    }), option);

    return await this.helpers.httpRequestWithAuthentication.call(
        this,
        OvhCloudApiSecretName,
        options,
    );
};