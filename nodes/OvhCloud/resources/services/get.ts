import {
    IDisplayOptions,
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties
} from "n8n-workflow"
import { OvhCloudApiClient } from "../../shared/OvhCloudApiClient";

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Type',
            name: 'type',
            type: 'options',
            options: [
                {
                    name: 'Dedicated Ceph',
                    value: '/dedicated/ceph',
                },
                {
                    name: 'Dedicated Cluster',
                    value: '/dedicated/cluster',
                },
                {
                    name: 'Dedicated Housing',
                    value: '/dedicated/housing',
                },
                {
                    name: 'Dedicated Server',
                    value: '/dedicated/server',
                },
                {
                    name: 'Domain',
                    value: '/domain',
                },
                {
                    name: 'Email',
                    value: '/email/domain',
                },
                {
                    name: 'Email Pro',
                    value: '/email/pro',
                },
                {
                    name: 'Hosting',
                    value: '/hosting/web',
                },
                // TODO: add more service types when we have more data available in the node
            ],
            default: '/hosting/web',
            description: 'How to select the service to retrieve',
            displayOptions,
        },
        {
            displayName: 'Service',
            name: 'serviceID',
            type: 'resourceLocator',
            default: {
                mode: 'list',
                value: '',
            },
            // description: 'The ID of the service to retrieve',
            required: true,
            displayOptions,
            modes: [
                {
                    displayName: 'By ID',
                    name: 'id',
                    type: 'string',
                    placeholder: 'Enter the service ID',
                },
                {
                    displayName: 'From List',
                    name: 'list',
                    type: 'list',
                    placeholder: 'Select a service...',
                    typeOptions: {
                        searchListMethod: 'getServices',
                        searchable: true,
                    },
                }
            ]
        },
    ]
};

export async function execute(
    this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const serviceID = this.getNodeParameter('serviceID', 0, { extractValue: true }) as { name: string, value: string };
    return await client.httpGet(`/services/${serviceID.value}`);
}