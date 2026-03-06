import {
    IExecuteFunctions,
    NodeApiError,
    NodeConnectionTypes,
    type INodeExecutionData,
    type INodeType,
    type INodeTypeDescription,
} from 'n8n-workflow';
import { servicesDescription, servicesExecute, servicesMethods } from './resources/services';
import { OvhCloudApiSecretName } from '../../credentials/OvhCloudApi.credentials';
import { domainMethods } from './resources/domain';
import { meDescription, meExecute } from './resources/me';

export class OvhCloud implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'OVH Cloud',
        name: 'ovhCloud',
        icon: 'file:../../icons/ovh_vertical.svg',
        group: ['input'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Manage OVH Cloud services',
        defaults: {
            name: 'OVH Cloud',
        },
        usableAsTool: true,
        inputs: [NodeConnectionTypes.Main],
        outputs: [NodeConnectionTypes.Main],
        credentials: [
            {
                name: OvhCloudApiSecretName,
                required: true,
            },
        ],
        properties: [
            // Resources types
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Domain',
                        value: 'domain',
                    },
                    {
                        name: 'Service',
                        value: 'services',
                    },
                    {
                        name: 'Me',
                        value: 'me',
                    },
                ],
                default: 'services',
            },
            ...servicesDescription,
            ...meDescription,
        ],
    };

    methods = {
        listSearch: Object.assign(
            {}, 
            servicesMethods, 
            domainMethods,
        ),
    }

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const resource = this.getNodeParameter('resource', 0);

        switch (resource) {
            case 'services':
                return await servicesExecute.call(this);
            case 'domain':
                break;
            case 'me':
                return await meExecute.call(this);
        }

        throw new NodeApiError(this.getNode(), { message: `The resource "${resource}" cannot be executed directly. Please select an operation to execute.` });
    }
}
