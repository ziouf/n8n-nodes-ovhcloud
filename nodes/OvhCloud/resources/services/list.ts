import { 
    IDataObject,
    IExecuteFunctions,
    INodeProperties,
} from "n8n-workflow"
import { 
    type OvhCredentialsType, 
    OvhCloudApiSecretName,
    signRequestOptions,
} from "../../../../credentials/OvhCloudApi.credentials";


const showOnlyForList = {
    resource: ['services'],
    operation: ['list'],
}

export const listDescription: INodeProperties[] = [
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
        displayOptions: {
            show: showOnlyForList,
        },
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
        displayOptions: {
            show: showOnlyForList,
        },
    },
    {
        displayName: 'Filter by Service Name',
        name: 'resourceName',
        type: 'string',
        default: '',
        description: 'Filter the results by service name (supports partial matches)',
        displayOptions: {
            show: showOnlyForList,
        },
    },
    {
        displayName: 'Filter by Route',
        name: 'routes',
        type: 'string',
        default: '',
        description: 'Filter the results by route (comma-separated)',
        displayOptions: {
            show: showOnlyForList,
        },
    },
]

export const listMethods = {};

export async function listServices(
    this: IExecuteFunctions, 
    option: IDataObject = {}
): Promise<IDataObject[]> {
    const credentials = await this.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;
    const orderBy = this.getNodeParameter('orderBy', 0, { extractValue: true });
    const sort = this.getNodeParameter('sort', 0, { extractValue: true });
    const resourceName = this.getNodeParameter('resourceName', 0, { extractValue: true });
    const routes = this.getNodeParameter('routes', 0, { extractValue: true });

    const serviceIDs = await this.helpers.httpRequestWithAuthentication.call(
        this, 
        OvhCloudApiSecretName, 
        Object.assign(signRequestOptions.call(this, credentials, {
            method: 'GET',
            url: `/services`,
            qs: {
                orderBy,
                sort,
                resourceName,
                routes,
            },
            json: true,
        }), option)
    );

    const results: IDataObject[] = [];

    for (const serviceID of serviceIDs) {
        const serviceData = await this.helpers.httpRequestWithAuthentication.call(
            this, 
            OvhCloudApiSecretName, 
            Object.assign(signRequestOptions.call(this, credentials, {
                method: 'GET',
                url: `/services/${serviceID}`,
                json: true,
            }), option)
        );        

        results.push(serviceData);
    }

    return results;
}