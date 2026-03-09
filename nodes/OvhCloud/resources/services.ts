import { IDisplayOptions, IExecuteFunctions, ILoadOptionsFunctions, INodeExecutionData, INodeListSearchResult, INodeProperties } from "n8n-workflow"
import { OvhCloudApiClient } from "../shared/OvhCloudApiClient";

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Operation',
            name: 'svcOperation',
            type: 'options',
            noDataExpression: true,
            displayOptions,
            // eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
            options: [
                {
                    name: 'List Services',
                    value: 'list',
                    action: 'List all available services',
                },
                {
                    name: 'Get Service',
                    value: 'get',
                    action: 'Get a specific service',
                },
                {
                    name: 'Get Service Forms',
                    value: 'getForms',
                    action: 'Get forms for a specific service',
                },
                {
                    name: 'Get Service Options',
                    value: 'getOptions',
                    action: 'Get options for a specific service',
                },
                {
                    name: 'Get Service Upgrades',
                    value: 'getUpgrades',
                    action: 'List offers this option can be converted to',
                },
            ],
            default: 'list',
        },

        /* Get operation */
        {
            displayName: 'Type',
            name: 'svcType',
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
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    svcOperation: [
                        'get', 
                        'getOptions', 
                        'getForms', 
                        'getUpgrades',
                    ],
                },
            },
        },
        {
            displayName: 'Service',
            name: 'svcID',
            type: 'resourceLocator',
            default: {
                mode: 'list',
                value: '',
            },
            // description: 'The ID of the service to retrieve',
            required: true,
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
            ],
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    svcOperation: [
                        'get', 
                        'getOptions', 
                        'getForms',
                        'getUpgrades',
                    ],
                },
            },
        },

        /* List operation */
        {
            displayName: 'orderBy',
            name: 'svcOrderBy',
            type: 'options',
            options: [
                {
                    name: 'Service ID',
                    value: 'serviceId',
                },
            ],
            default: 'serviceId',
            description: 'Order the results by the selected field',
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    svcOperation: ['list'],
                },
            },
        },
        {
            displayName: 'Sort',
            name: 'svcSort',
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
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    svcOperation: ['list'],
                },
            },
        },
        {
            displayName: 'Filter by Service Name',
            name: 'svcResourceName',
            type: 'string',
            default: '',
            description: 'Filter the results by service name (supports partial matches)',
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    svcOperation: ['list'],
                },
            },
        },
        {
            displayName: 'Filter by Route',
            name: 'svcRoutes',
            type: 'string',
            default: '',
            description: 'Filter the results by route (comma-separated)',
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    svcOperation: ['list'],
                },
            },
        },
    ]
};

export const methodsListSearch = {
    getServices: async function (this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
        const client = new OvhCloudApiClient(this);
        const type = this.getNodeParameter('svcType', 0, { extractValue: true }) as string;
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

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('svcOperation', 0);

    switch (operation) {
        case 'list':
            return executeList.call(this);
        case 'get':
            return executeGet.call(this);
        case 'getOptions':
            return executeGetOptions.call(this);
        case 'getForms':
            return executeGetForms.call(this);
        case 'getUpgrades':
            return executeGetUpgrades.call(this);
    }

    throw new Error('The resource "services" cannot be executed directly. Please select an operation to execute.');
};

async function executeList(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const routes = this.getNodeParameter('svcRoutes', 0, { extractValue: true, default: null });
    const resourceName = this.getNodeParameter('svcResourceName', 0, { extractValue: true });
    const orderBy = this.getNodeParameter('svcOrderBy', 0, { extractValue: true });
    const sort = this.getNodeParameter('svcSort', 0, { extractValue: true });
    const serviceIds = await client.httpGet(`/services`, { 
        orderBy,
        resourceName,
        routes,
        sort,
    });
    const services = [];
    for (const serviceId of serviceIds) {
        const service = await client.httpGet(`/services/${serviceId}`);
        services.push(service);
    }
    return services;
};

async function executeGet(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const serviceID = this.getNodeParameter('svcID', 0, { extractValue: true }) as { name: string, value: string };
    return await client.httpGet(`/services/${serviceID.value}`);
};

async function executeGetOptions(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const serviceID = this.getNodeParameter('svcID', 0, { extractValue: true }) as { name: string, value: string };
    return await client.httpGet(`/services/${serviceID.value}/options`);
};

async function executeGetForms(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const serviceID = this.getNodeParameter('svcID', 0, { extractValue: true }) as { name: string, value: string };
    return await client.httpGet(`/services/${serviceID.value}/form`);
};

async function executeGetUpgrades(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const serviceID = this.getNodeParameter('svcID', 0, { extractValue: true }) as { name: string, value: string };
    return await client.httpGet(`/services/${serviceID.value}/upgrade`);
};

