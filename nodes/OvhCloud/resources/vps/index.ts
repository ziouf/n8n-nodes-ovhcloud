import { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";

import {
    description as descriptionList,
    execute as executeList,
    methodsListSearch as methodsListSearchList,
} from "./list";

import {
    description as descriptionGet,
    execute as executeGet,
    methodsListSearch as methodsListSearchGet,
} from "./get";

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Operation',
            name: 'vpsOperation',
            type: 'options',
            noDataExpression: true,
            displayOptions,
            options: [
                {
                    name: 'Get All VPS',
                    value: 'list',
                    action: 'Get all VPS of the authenticated user',
                },
                {
                    name: 'Get VPS Details',
                    value: 'get',
                    action: 'Get details of a VPS',
                },
            ],
            default: 'list',
        },
        ...descriptionList({ show: {...displayOptions.show, vpsOperation: ['list'] } }),
        ...descriptionGet({ show: {...displayOptions.show, vpsOperation: ['get'] } }),
    ];
}

export const methodsListSearch = {
    ...methodsListSearchList,
    ...methodsListSearchGet,
};

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('vpsOperation', 0);

    switch (operation) {
        case 'list':
            return executeList.call(this);
        case 'get':
            return executeGet.call(this);
    }

    throw new Error('The resource "vps" cannot be executed directly. Please select an operation to execute.');
}
