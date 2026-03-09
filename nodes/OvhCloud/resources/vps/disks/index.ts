import { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";
import { OvhCloudApiClient } from "../../../shared/OvhCloudApiClient";

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Operation',
            name: 'vpsDisksOperation',
            type: 'options',
            noDataExpression: true,
            displayOptions,
            options: [
                {
                    name: 'Get All Disks',
                    value: 'list',
                    action: 'Get all disks of a VPS',
                },
            ],
            default: 'list',
        },
    ]
}

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
    const operation = this.getNodeParameter('vpsDisksOperation', 0, { extractValue: true });

    if (!serviceName) {
        throw new Error('Service Name is required to perform this operation.');
    }

    switch (operation) {
        case 'list':
            return await listDisks.call(this, serviceName);
    }
    
    throw new Error('The resource "VPS Disks" cannot be executed directly. Please select an operation to execute.');
}

async function listDisks(
    this: IExecuteFunctions,
    serviceName: string,
): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    return client.httpGet(`/vps/${serviceName}/disks`);
}