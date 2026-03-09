import { 
    IDisplayOptions,
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
} from "n8n-workflow"
import { OvhCloudApiClient } from "../../shared/OvhCloudApiClient";


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'orderBy',
            name: 'orderBy',
            type: 'options',
            options: [
                {
                    name: 'Service ID',
                    value: 'serviceId',
                },
                // TODO: add more fields to order by when we have more data available in the node
                // {
                //     name: 'Termination Date',
                //     value: 'billing.expirationDate',
                // },
                // {
                //     name: 'Resource Display Name',
                //     value: 'resource.displayName',
                // },
            ],
            default: 'serviceId',
            description: 'Order the results by the selected field',
            displayOptions,
        },
        {
            displayName: 'Sort',
            name: 'sort',
            type: 'options',
            options: [
                {
                    name: 'Ascending',
                    value: 'asc',
                },
                {
                    name: 'Descending',
                    value: 'desc',
                },
            ],
            default: 'asc',
            description: 'Sort the results in ascending or descending order',
            displayOptions,
        },
        {
            displayName: 'Filter by Service Name',
            name: 'resourceName',
            type: 'string',
            default: '',
            description: 'Filter the results by service name (supports partial matches)',
            displayOptions,

        },
        {
            displayName: 'Filter by Route',
            name: 'routes',
            type: 'string',
            default: '',
            description: 'Filter the results by route (comma-separated)',
            displayOptions,
        },
    ];
};

export async function execute(
    this: IExecuteFunctions, 
): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const orderBy = this.getNodeParameter('orderBy', 0, { extractValue: true });
    const sort = this.getNodeParameter('sort', 0, { extractValue: true });
    const resourceName = this.getNodeParameter('resourceName', 0, { extractValue: true });
    const routes = this.getNodeParameter('routes', 0, { extractValue: true });
    
    const serviceIds = await client.httpGet(`/services`, { orderBy, sort, resourceName, routes });

    const results: INodeExecutionData[] = [];

    for (const serviceId of serviceIds) {
        const serviceData = await client.httpGet(`/services/${serviceId}`);

        results.push(serviceData);
    }

    return results;
}