import { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";
import { OvhCloudApiSecretName, OvhCredentialsType, signRequestOptions } from "../../../../credentials/OvhCloudApi.credentials";

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Operation',
            name: 'meOperation',
            type: 'options',
            noDataExpression: true,
            displayOptions,
            options: [
                {
                    name: 'Get My Info',
                    value: 'get',
                    action: 'Get information about the authenticated user',
                },
            ],
            default: 'get',
        },
    ]
};

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('meOperation', 0);

    switch (operation) {
        case 'get':
            return await get.call(this);
    }

    throw new Error('The resource "me" cannot be executed directly. Please select an operation to execute.');
};


export async function get(
    this: IExecuteFunctions,
    option: IDataObject = {}
): Promise<INodeExecutionData[]> {
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

