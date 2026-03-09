import { IDisplayOptions, IExecuteFunctions, ILoadOptionsFunctions, INodeExecutionData, INodeListSearchResult, INodeProperties } from "n8n-workflow";
import { OvhCloudApiClient } from "../shared/OvhCloudApiClient";


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Operation',
            name: 'operation',
            type: 'options',
            noDataExpression: true,
            options: [
                {
                    name: 'List Domains',
                    value: 'list',
                    action: 'List all email domains',
                },
                {
                    name: 'Get Domain',
                    value: 'get',
                    action: 'Get details of a email domain',
                }
            ],
            default: 'list',
            displayOptions,
        },
        {
            displayName: 'Domain Name',
            name: 'domainName',
            type: 'resourceLocator',
            default: {
                mode: 'list',
                value: '',
            },
            required: true,
            modes: [
                {
                    displayName: 'By ID',
                    name: 'id',
                    type: 'string',
                    placeholder: 'Enter the domain name',
                },
                {
                    displayName: 'From List',
                    name: 'list',
                    type: 'list',
                    placeholder: 'Select from the list',
                    typeOptions: {
                        searchListMethod: 'getEmailDomains',
                        searchable: true,
                    },
                }
            ],
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    operation: ['get'],
                },
            },
        },
    ];
}

export const methodsListSearch = {
    getEmailDomains: async function (this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
        const client = new OvhCloudApiClient(this);
        const results = await client.httpGet('/email/domain');
        return { results: results.map((domain: string) => ({ name: domain, value: domain })) };
    }
};

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const operation = this.getNodeParameter('operation', 0, { extractValue: true }) as string;
    const { value: domainName } = this.getNodeParameter('domainName', 0, { extractValue: true }) as { value: string };
    
    switch (operation) {
        case 'list':
            return await client.httpGet('/email/domain');
        case 'get':
            return await client.httpGet(`/email/domain/${domainName}`);
    }

    throw new Error(`The operation "${operation}" is not supported!`);
}
