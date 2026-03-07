import { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";
import { OvhCloudApiSecretName, OvhCredentialsType, signRequestOptions } from "../../../../../credentials/OvhCloudApi.credentials";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [];
}

export async function execute(
    this: IExecuteFunctions,
    option: IDataObject = {}
): Promise<INodeExecutionData[]> {
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