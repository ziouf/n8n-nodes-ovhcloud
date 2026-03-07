import { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";
import { OvhCloudApiSecretName, OvhCredentialsType, signRequestOptions } from "../../../../credentials/OvhCloudApi.credentials";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [];
};

export const methodsListSearch = {};

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const credentials = await this.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;
    
    const options = signRequestOptions.call(this, credentials, {
        method: 'GET',
        url: `/vps`,
        qs: {},
        json: true,
    });

    return this.helpers.httpRequestWithAuthentication.call(this, OvhCloudApiSecretName, options);
}