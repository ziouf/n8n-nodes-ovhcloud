import { IDisplayOptions, IExecuteFunctions, ILoadOptionsFunctions, INodeExecutionData, INodeListSearchResult, INodeProperties } from "n8n-workflow";
import { OvhCloudApiSecretName, OvhCredentialsType, signRequestOptions } from "../../../../credentials/OvhCloudApi.credentials";


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Service Name',
            name: 'serviceName',
            description: 'The name of the VPS service to retrieve. This can be set manually or selected from the list of services.',
            type: 'resourceLocator',
            default: {
                mode: 'str',
                value: '',
            },
            modes: [
                {
                    displayName: 'By Name',
                    name: 'str',
                    type: 'string',
                },
                {
                    displayName: 'From List',
                    name: 'list',
                    type: 'list',
                    placeholder: 'Select a service...',
                    typeOptions: {
                        searchListMethod: 'getVpsServices',
                        searchable: true,
                    },
                },
            ],
            displayOptions,
        },
        {
            displayName: 'Sub Resource',
            name: 'subResource',
            type: 'options',
            options: [
                { name: 'Automated Backup', value: 'automatedBackup' },
                { name: 'Available Upgrade', value: 'availableUpgrade' },
                { name: 'Backup FTP', value: 'backupftp' },
                { name: 'Datacenter', value: 'datacenter' },
                { name: 'VPS', value: 'vps' },
            ],
            default: 'vps',
            description: 'The sub resource of the VPS service',
            displayOptions,
        }   
    ];
}

export const methodsListSearch = {
    getVpsServices: async function (this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
        const credentials = await this.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;

        const options = signRequestOptions.call(this, credentials, {
            method: 'GET',
            url: `/vps`,
            qs: {},
            json: true,
        });

        const responseData = await this.helpers.httpRequestWithAuthentication.call(this, OvhCloudApiSecretName, options);
        const results = responseData.map((service: string) => ({ 
            name: service, 
            value: service 
        }));

        return { results };
    }
};

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const credentials = await this.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;
    const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true });
    const subResource = this.getNodeParameter('subResource', 0, { extractValue: true });

    switch (subResource) {
        case 'automatedBackup':
            return await this.helpers.httpRequestWithAuthentication.call(this, OvhCloudApiSecretName, signRequestOptions.call(this, credentials, {
                method: 'GET',
                url: `/vps/${serviceName}/automatedBackup`,
                qs: {},
                json: true,
            }));
        case 'availableUpgrade':
            return await this.helpers.httpRequestWithAuthentication.call(this, OvhCloudApiSecretName, signRequestOptions.call(this, credentials, {
                method: 'GET',
                url: `/vps/${serviceName}/availableUpgrade`,
                qs: {},
                json: true,
            }));
        case 'backupftp':
            return await this.helpers.httpRequestWithAuthentication.call(this, OvhCloudApiSecretName, signRequestOptions.call(this, credentials, {
                method: 'GET',
                url: `/vps/${serviceName}/backupftp`,
                qs: {},
                json: true,
            }));
        case 'datacenter':
            return await this.helpers.httpRequestWithAuthentication.call(this, OvhCloudApiSecretName, signRequestOptions.call(this, credentials, {
                method: 'GET',
                url: `/vps/${serviceName}/datacenter`,
                qs: {},
                json: true,
            }));
        case 'vps':
            return await this.helpers.httpRequestWithAuthentication.call(this, OvhCloudApiSecretName, signRequestOptions.call(this, credentials, {
                method: 'GET',
                url: `/vps/${serviceName}`,
                qs: {},
                json: true,
            }));
    }

    throw new Error('Invalid sub resource selected');
}
