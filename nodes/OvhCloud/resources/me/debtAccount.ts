import { IDataObject, IExecuteFunctions, INodeProperties } from "n8n-workflow";
import { OvhCloudApiSecretName, OvhCredentialsType, signRequestOptions } from "../../../../credentials/OvhCloudApi.credentials";

// const showOnlyForMeDebtAccount = {
//     resource: ['me'],
//     operation: ['debtAccount'],
// };

export const getDebtAccountDescription: INodeProperties[] = [];

export async function getDebtAccount(
    this: IExecuteFunctions,
    option: IDataObject = {}
): Promise<IDataObject> {
    const credentials = await this.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;

    const options = Object.assign(signRequestOptions.call(this, credentials, {
        method: 'GET',
        url: `/me/debtAccount`,
        qs: {},
        json: true,
    }), option);

    return await this.helpers.httpRequestWithAuthentication.call(
        this,
        OvhCloudApiSecretName,
        options,
    );
}