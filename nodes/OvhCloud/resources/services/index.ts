import { IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow"
import { listDescription, listMethods, listServices } from "./list"
import { getDescription, getMethods, getService } from "./get"


const showOnlyForServices = {
    resource: ['services'],
};

export const servicesDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForServices,
        },
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
    ...listDescription,
    ...getDescription,
];

export const servicesMethods = Object.assign({}, getMethods, listMethods);

export async function servicesExecute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[][]> {
    const operation = this.getNodeParameter('operation', 0);

    switch (operation) {
        case 'list':
            return [this.helpers.returnJsonArray(await listServices.call(this))];
        case 'get':
            return [this.helpers.returnJsonArray(await getService.call(this))];
    }

    throw new Error('The resource "services" cannot be executed directly. Please select an operation to execute.');
}