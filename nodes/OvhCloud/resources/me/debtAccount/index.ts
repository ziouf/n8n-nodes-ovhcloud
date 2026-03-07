import { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";
import {
    execute as executeGet,
    description as descriptionGet,
} from './get';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Debt Account Operation',
            name: 'debtAccountOperation',
            type: 'options',
            noDataExpression: true,
            displayOptions,
            options: [
                {
                    name: 'Get Debt Account',
                    value: 'get',
                    action: 'Get information about the debt account of the authenticated user', 
                },
            ],
            default: 'get',
        },
        ...descriptionGet({ show: {...displayOptions.show, debtAccountOperation: ['get'] } }),
    ]
}

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('debtAccountOperation', 0);

    switch (operation) {
        case 'get':
            return executeGet.call(this);
    }
    throw new Error(`Unsupported operation "${operation}" for resource "debtAccount"`);
}