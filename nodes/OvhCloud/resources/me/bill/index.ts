import { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";
import {
    execute as executeList,
    description as descriptionList,
} from "./list";

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Bill Operation',
            name: 'billOperation',
            type: 'options',
            noDataExpression: true,
            displayOptions,
            options: [
                {
                    name: 'List Bills',
                    value: 'list',
                    action: 'List bills of the authenticated user',
                },
            ],
            default: 'list',
        },
        ...descriptionList({ show: {...displayOptions.show, billOperation: ['list'] } }),
    ]
}

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('billOperation', 0);

    switch (operation) {
        case 'list':
            return executeList.call(this);
    }
    throw new Error(`Unsupported operation "${operation}" for resource "bill"`);
}