import { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow"
import {
    description as descriptionGet,
    execute as executeGet,
    methodsListSearch as methodsListSearchGet,
} from "./get";
import {
    description as descriptionList,
    execute as executeList,
    methodsListSearch as methodsListSearchList,
} from "./list";

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
                    name: 'List Services',
                    value: 'list',
                    action: 'List all available services',
                },
                {
                    name: 'Get Service',
                    value: 'get',
                    action: 'Get a specific service by ID',
                },
            ],
            default: 'list',
        },
        ...descriptionList({ show: {...displayOptions.show, operation: ['list'] } }),
        ...descriptionGet({ show: {...displayOptions.show, operation: ['get'] } }),
    ]
};

export const methodsListSearch = {
    ...methodsListSearchGet,
    ...methodsListSearchList,
};

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('operation', 0);

    switch (operation) {
        case 'list':
            return executeList.call(this);
        case 'get':
            return executeGet.call(this);
    }

    throw new Error('The resource "services" cannot be executed directly. Please select an operation to execute.');
};