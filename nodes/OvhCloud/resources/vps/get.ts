import { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";

import { 
    description as descriptionDisks,
    execute as executeDisks,
} from "./disks";
import { OvhCloudApiClient } from "../../shared/OvhCloudApiClient";

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
            required: true,
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
        },
        ...descriptionDisks({ show: {...displayOptions.show, subResource: ['disks'] } }),
    ];
}

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true });
    const subResource = this.getNodeParameter('subResource', 0, { extractValue: true });

    switch (subResource) {
        case 'automatedBackup':
            return client.httpGet(`/vps/${serviceName}/automatedBackup`);
        case 'availableUpgrade':
            return client.httpGet(`/vps/${serviceName}/availableUpgrade`);
        case 'backupftp':
            return client.httpGet(`/vps/${serviceName}/backupftp`);
        case 'datacenter':
            return client.httpGet(`/vps/${serviceName}/datacenter`);
        case 'disks':
            return executeDisks.call(this);
        case 'distribution':
            return client.httpGet(`/vps/${serviceName}/distribution`);
        case 'ipCountryAvailable':
            return client.httpGet(`/vps/${serviceName}/ipCountryAvailable`);
        case 'ips':
            return client.httpGet(`/vps/${serviceName}/ips`);
        case 'models':
            return client.httpGet(`/vps/${serviceName}/models`);
        case 'option':
            return client.httpGet(`/vps/${serviceName}/option`);
        case 'secondaryDnsDomains':
            return client.httpGet(`/vps/${serviceName}/secondaryDnsDomains`);
        case 'serviceInfos':
            return client.httpGet(`/vps/${serviceName}/serviceInfos`);
        case 'snapshot':
            return client.httpGet(`/vps/${serviceName}/snapshot`);
        case 'status':
            return client.httpGet(`/vps/${serviceName}/status`);
        case 'vps':
            return client.httpGet(`/vps/${serviceName}`);
    }

    throw new Error('Invalid sub resource selected');
}
