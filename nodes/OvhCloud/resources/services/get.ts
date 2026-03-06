import { 
    IDataObject, 
    IExecuteFunctions, 
    INodeProperties 
} from "n8n-workflow"
import { 
    type OvhCredentialsType, 
    OvhCloudApiSecretName, 
    signRequestOptions
} from "../../../../credentials/OvhCloudApi.credentials";
import { getServices } from "../../listSearch/getServices";


const showOnlyForGet = {
    resource: ['services'],
    operation: ['get'],
}

export const getDescription: INodeProperties[] = [
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
        displayOptions: {
            show: showOnlyForGet,
        },
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
        displayOptions: {
            show: showOnlyForGet,
        },
        modes: [
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

export const getMethods = {
    getServices,
};


export async function getService(
    this: IExecuteFunctions, 
    option: IDataObject = {}
): Promise<IDataObject> {
    const credentials = await this.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;
    const serviceID = this.getNodeParameter('serviceID', 0, { extractValue: true }) as {name: string, value: string};

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