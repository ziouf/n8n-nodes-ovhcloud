import { 
    IDataObject,
    IDisplayOptions,
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
} from "n8n-workflow"
import { 
    type OvhCredentialsType, 
    OvhCloudApiSecretName,
    signRequestOptions,
} from "../../../../credentials/OvhCloudApi.credentials";


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

export const methodsListSearch = {};

export async function execute(
    this: IExecuteFunctions, 
    option: IDataObject = {}
): Promise<INodeExecutionData[]> {
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

    const results: INodeExecutionData[] = [];

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