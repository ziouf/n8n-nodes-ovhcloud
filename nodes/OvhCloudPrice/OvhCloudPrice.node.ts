import type {
    IExecuteFunctions,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { BaseNode } from '../../shared/nodes';

export class OvhCloudPrice extends BaseNode implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'OVH Cloud Price',
        name: 'ovhCloudPrice',
        icon: OvhCloudIcon,
        group: ['input'],
        version: 1,
        subtitle: '={{$parameter["priceOperation"]}}',
        description: 'Consult OVHcloud prices via /price API v1',
        defaults: { name: 'OVH Cloud Price' },
        usableAsTool: true,
        inputs: [NodeConnectionTypes.Main],
        outputs: [NodeConnectionTypes.Main],
        credentials: [{ name: OvhCloudApiSecretName, required: true }],
        properties: [...description({})] };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        return super.runTemplate.call(
            this,
            execute,
            { resource: 'price', operationParam: 'priceOperation' },
        );
    }
}
