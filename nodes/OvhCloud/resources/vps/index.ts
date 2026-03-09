import { IDisplayOptions, IExecuteFunctions, ILoadOptionsFunctions, INodeExecutionData, INodeListSearchResult, INodeProperties } from "n8n-workflow";
import { OvhCloudApiClient } from "../../shared/OvhCloudApiClient";

import {
    description as descriptionList,
    execute as executeList,
} from "./list";

import {
    description as descriptionGet,
    execute as executeGet,
} from "./get";

import {
    description as descriptionCreateSnapshot,
    execute as executeCreateSnapshot,
} from "./createSnapshot";

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Operation',
            name: 'vpsOperation',
            type: 'options',
            noDataExpression: true,
            displayOptions,
            options: [
                {
                    name: 'List All VPS',
                    value: 'list',
                    action: 'List all VPS of the authenticated user',
                },
                {
                    name: 'Get VPS Details',
                    value: 'get',
                    action: 'Get details of a VPS',
                },
                // TODO: replace by Snapshot resource with create and list operations
                {
                    name: 'Create VPS Snapshot',
                    value: 'createSnapshot',
                    action: 'Create a snapshot of a VPS',
                },
            ],
            default: 'list',
        },
        ...descriptionList({ show: {...displayOptions.show, vpsOperation: ['list'] } }),
        ...descriptionGet({ show: {...displayOptions.show, vpsOperation: ['get'] } }),
        ...descriptionCreateSnapshot({ show: {...displayOptions.show, vpsOperation: ['createSnapshot'] } }),
    ];
}

export const methodsListSearch = {
    getVpsServices: async function (this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
        const client = new OvhCloudApiClient(this);
        const data = await client.httpGet(`/vps`);
        return { results: data.map((service: string) => ({ name: service, value: service })) };
    }
};

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('vpsOperation', 0);

    switch (operation) {
        case 'list':
            return executeList.call(this);
        case 'get':
            return executeGet.call(this);
        case 'createSnapshot':
            return executeCreateSnapshot.call(this);
    }

    throw new Error('The resource "vps" cannot be executed directly. Please select an operation to execute.');
}
