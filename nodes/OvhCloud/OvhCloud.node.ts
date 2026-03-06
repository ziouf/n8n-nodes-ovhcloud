import {
    IExecuteFunctions,
    NodeConnectionTypes,
    type INodeExecutionData,
    type INodeType,
    type INodeTypeDescription,
} from 'n8n-workflow';
import { servicesDescription, servicesMethods } from './resources/services';
import { listServices } from './resources/services/list';
import { OvhCloudApiSecretName } from '../../credentials/OvhCloudApi.credentials';
import { getService } from './resources/services/get';
import { domainMethods } from './resources/domain';

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
                ],
                default: 'services',
            },
            ...servicesDescription,
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
        const items = this.getInputData();

        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);

        switch (resource) {
            case 'services':
                switch (operation) {
                    case 'list':
                        return [this.helpers.returnJsonArray(await listServices.call(this))];
                    case 'get':
                        return [this.helpers.returnJsonArray(await getService.call(this))];
                }
                break;
            // case 'domain':
            //     switch (operation) {
            //         case 'listDomains':
            //             return this.helpers.returnJsonArray(await listDomains.call(this));
            //             break;
            //     }
            //     break;
        }

        return [items];
    }
}
