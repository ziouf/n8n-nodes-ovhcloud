import { IDisplayOptions, IExecuteFunctions, ILoadOptionsFunctions, INodeExecutionData, INodeListSearchResult, INodeProperties } from "n8n-workflow"
import {
    description as descriptionGet,
    execute as executeGet,
} from "./get";
import {
    description as descriptionList,
    execute as executeList,
} from "./list";
import { OvhCloudApiClient } from "../../shared/OvhCloudApiClient";

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Operation',
            name: 'operation',
            type: 'options',
            noDataExpression: true,
            displayOptions,
            options: [
                {
                    name: 'List Services',
                    value: 'list',
                    action: 'List all available services',
                },
                {
                    name: 'Get Service',
                    value: 'get',
                    action: 'Get a specific service by ID',
                },
            ],
            default: 'list',
        },
        ...descriptionList({ show: {...displayOptions.show, operation: ['list'] } }),
        ...descriptionGet({ show: {...displayOptions.show, operation: ['get'] } }),
    ]
};

export const methodsListSearch = {
    getServices: async function (this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
        const client = new OvhCloudApiClient(this);
        const type = this.getNodeParameter('type', 0, { extractValue: true }) as string;
        const serviceIds = await client.httpGet(`/services`, { routes: type });
    
        const results: INodeListSearchResult = { results: [] };
    
        for (const serviceId of serviceIds) {
            const service = await client.httpGet(`/services/${serviceId}`);
    
            results.results.push({
                name: `${service.resource.product.name} - ${service.resource.displayName}`,
                value: service.serviceId,
            });
        }
    
        return results;
    },
};

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('operation', 0);

    switch (operation) {
        case 'list':
            return executeList.call(this);
        case 'get':
            return executeGet.call(this);
    }

    throw new Error('The resource "services" cannot be executed directly. Please select an operation to execute.');
};