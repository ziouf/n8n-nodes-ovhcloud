import {
    IExecuteFunctions,
    NodeApiError,
    NodeConnectionTypes,
    type INodeExecutionData,
    type INodeType,
    type INodeTypeDescription,
} from 'n8n-workflow';
import { OvhCloudApiSecretName } from '../../credentials/OvhCloudApi.credentials';
import {
    description as descriptionDomain,
    execute as executeDomain,
    methodsListSearch as methodsListSearchDomain,
} from './resources/domain';
import { 
    description as descriptionMe, 
    execute as executeMe,
    methodsListSearch as methodsListSearchMe,
} from './resources/me';
import { 
    description as descriptionServices,
    execute as executeServices,
    methodsListSearch as methodsListSearchServices,
 } from './resources/services';
 import {
    description as descriptionVps,
    execute as executeVps,
    methodsListSearch as methodsListSearchVps,
 } from './resources/vps';

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
                    {
                        // eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
                        name: 'VPS',
                        value: 'vps',
                    }
                ],
                default: 'services',
            },
            ...descriptionDomain({ show: { resource: ['domain'] } }),
            ...descriptionMe({show: { resource: ['me'] }}),
            ...descriptionServices({ show: { resource: ['services'] } }),
            ...descriptionVps({ show: { resource: ['vps'] } }),
        ],
    };

    methods: INodeType['methods'] = {
        listSearch: {
            ...methodsListSearchDomain,
            ...methodsListSearchMe,
            ...methodsListSearchServices,
            ...methodsListSearchVps,
        },
    }

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const resource = this.getNodeParameter('resource', 0);

        switch (resource) {
            case 'domain':
                return [this.helpers.returnJsonArray(await executeDomain.call(this))];
            case 'me':
                return [this.helpers.returnJsonArray(await executeMe.call(this))];
            case 'services':
                return [this.helpers.returnJsonArray(await executeServices.call(this))];
            case 'vps':
                return [this.helpers.returnJsonArray(await executeVps.call(this))];
        }

        throw new NodeApiError(this.getNode(), { message: `The resource "${resource}" cannot be executed directly. Please select an operation to execute.` });
    }
}
