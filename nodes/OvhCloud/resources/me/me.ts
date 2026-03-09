import { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";
import { OvhCloudApiClient } from "../../shared/OvhCloudApiClient";

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
    const client = new OvhCloudApiClient(this);
    const operation = this.getNodeParameter('meOperation', 0);

    switch (operation) {
        case 'get':
            return await client.httpGet(`/me`);
    }

    throw new Error('The resource "me" cannot be executed directly. Please select an operation to execute.');
};

