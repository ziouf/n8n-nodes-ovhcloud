import { INodeProperties } from "n8n-workflow"
import { listDescription, listMethods } from "./list"
import { getDescription, getMethods } from "./get"


const showOnlyForServices = {
    resource: ['services'],
}

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
]

export const servicesMethods = Object.assign({}, getMethods, listMethods)
