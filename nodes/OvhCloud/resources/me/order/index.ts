import { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { 
    getDescription as descriptionGet,
    execute as executeGet,
} from './get';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Order Operation',
            name: 'orderOperation',
            type: 'options',
            noDataExpression: true,
            displayOptions,
            options: [
                {
                    name: 'Get Order',
                    value: 'get',
                    action: 'Get a specific order by ID',
                },
            ],
            default: 'get',
        },
        ...descriptionGet({ show: {...displayOptions.show, orderOperation: ['get'] } }),
    ]
}


export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('orderOperation', 0);

    switch (operation) {
        case 'get':
            return executeGet.call(this);
    }
    throw new Error(`Unsupported operation "${operation}" for resource "order"`);
}