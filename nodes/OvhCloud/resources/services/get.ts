import {
    IDataObject,
    IDisplayOptions,
    IExecuteFunctions,
    ILoadOptionsFunctions,
    INodeExecutionData,
    INodeListSearchItems,
    INodeListSearchResult,
    INodeProperties
} from "n8n-workflow"
import {
    type OvhCredentialsType,
    OvhCloudApiSecretName,
    signRequestOptions
} from "../../../../credentials/OvhCloudApi.credentials";

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

export const methodsListSearch = {
    getServices: async function (this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
        const credentials = await this.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;
        const type = this.getNodeParameter('type', 0, { extractValue: true }) as string;
    
        const serviceIds = await this.helpers.httpRequestWithAuthentication.call(
            this, 
            OvhCloudApiSecretName, 
            signRequestOptions.call(this, credentials, {
                method: 'GET',
                url: `/services`,
                qs: {
                    routes: type,
                },
                json: true,
            })
        );
    
        const results: INodeListSearchItems[] = [];
    
        for (const serviceId of serviceIds) {
            const service = await this.helpers.httpRequestWithAuthentication.call(
                this, 
                OvhCloudApiSecretName, 
                signRequestOptions.call(this, credentials, {
                    method: 'GET',
                    url: `/services/${serviceId}`,
                    json: true,
                })
            );
    
            results.push({
                name: `${service.resource.product.name} - ${service.resource.displayName}`,
                value: service.serviceId,
            });
        }
    
        return { results };
    },
};

export async function execute(
    this: IExecuteFunctions,
    option: IDataObject = {}
): Promise<INodeExecutionData[]> {
    const credentials = await this.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;
    const serviceID = this.getNodeParameter('serviceID', 0, { extractValue: true }) as { name: string, value: string };

    const options = Object.assign(signRequestOptions.call(this, credentials, {
        method: 'GET',
        url: `/services/${serviceID.value}`,
        qs: {},
        json: true,
    }), option)

    return await this.helpers.httpRequestWithAuthentication.call(
        this,
        OvhCloudApiSecretName,
        options,
    );
}