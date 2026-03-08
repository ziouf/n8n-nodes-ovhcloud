import { IDataObject, IDisplayOptions, IExecuteFunctions, ILoadOptionsFunctions, INodeExecutionData, INodeListSearchResult, INodeProperties } from "n8n-workflow";
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
                { name: 'Disks', value: 'disks' },
                { name: 'Distribution', value: 'distribution' },
                { name: 'IP Country Available', value: 'ipCountryAvailable' },
                { name: 'IPs', value: 'ips' },
                { name: 'Models', value: 'models' },
                { name: 'Option', value: 'option' },
                { name: 'Secondary DNS Domains', value: 'secondaryDnsDomains' },
                { name: 'Service Infos', value: 'serviceInfos' },
                { name: 'Snapshot', value: 'snapshot' },
                { name: 'Status', value: 'status' },
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
    const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true });
    const subResource = this.getNodeParameter('subResource', 0, { extractValue: true });

    switch (subResource) {
        case 'automatedBackup':
            return httpGet.call(this, `/vps/${serviceName}/automatedBackup`);
        case 'availableUpgrade':
            return httpGet.call(this, `/vps/${serviceName}/availableUpgrade`);
        case 'backupftp':
            return httpGet.call(this, `/vps/${serviceName}/backupftp`);
        case 'datacenter':
            return httpGet.call(this, `/vps/${serviceName}/datacenter`);
        case 'disks':
            return httpGet.call(this, `/vps/${serviceName}/disks`);
        case 'distribution':
            return httpGet.call(this, `/vps/${serviceName}/distribution`);
        case 'ipCountryAvailable':
            return httpGet.call(this, `/vps/${serviceName}/ipCountryAvailable`);
        case 'ips':
            return httpGet.call(this, `/vps/${serviceName}/ips`);
        case 'models':
            return httpGet.call(this, `/vps/${serviceName}/models`);
        case 'option':
            return httpGet.call(this, `/vps/${serviceName}/option`);
        case 'secondaryDnsDomains':
            return httpGet.call(this, `/vps/${serviceName}/secondaryDnsDomains`);
        case 'serviceInfos':
            return httpGet.call(this, `/vps/${serviceName}/serviceInfos`);
        case 'snapshot':
            return httpGet.call(this, `/vps/${serviceName}/snapshot`);
        case 'status':
            return httpGet.call(this, `/vps/${serviceName}/status`);
        case 'vps':
            return httpGet.call(this, `/vps/${serviceName}`);
    }

    throw new Error('Invalid sub resource selected');
}

async function httpGet(
    this: IExecuteFunctions, 
    url: string,
    qs: IDataObject = {}
): Promise<INodeExecutionData[]> {
    const credentials = await this.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;
    return this.helpers.httpRequestWithAuthentication.call(this, OvhCloudApiSecretName, 
        signRequestOptions.call(this, credentials, { method: 'GET', url, qs, json: true,})
    );
}