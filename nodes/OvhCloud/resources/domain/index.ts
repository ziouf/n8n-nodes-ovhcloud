import { INodeProperties } from "n8n-workflow"


const showOnlyForDomain = {
    resource: ['domain'],
}

export const domainDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForDomain,
        },
        options: [
            {
                name: 'List Domains',
                value: 'list',
                action: 'List all domains',
            },
            {
                name: 'Get Domain',
                value: 'get',
                action: 'Get a specific domain by ID',
            },
        ],
        default: 'list',
    },
]

export const domainMethods = {};
