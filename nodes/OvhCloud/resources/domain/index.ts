import { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow"


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Operation',
            name: 'operation',
            type: 'options',
            noDataExpression: true,
            displayOptions,
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
    ];
}

export const methodsListSearch = {};

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('operation', 0);

    switch (operation) {
        case 'list':
            throw new Error('The "List Domains" operation is not implemented yet.');
        case 'get':
            throw new Error('The "Get Domain" operation is not implemented yet.');
    }

    throw new Error('The resource "domain" cannot be executed directly. Please select an operation to execute.');
};