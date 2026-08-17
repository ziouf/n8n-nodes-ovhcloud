import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Kube ID',
			name: 'kubeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Kube cluster ID',
			displayOptions,
		},
		{
			displayName: 'Load Balancers Subnet ID',
			name: 'loadBalancersSubnetId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Update Kube Load Balancers Subnet ID operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/kube/{kubeId}/updateLoadBalancersSubnetId
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const kubeId = this.getNodeParameter('kubeId', _itemIndex ?? 0) as string;
	const loadBalancersSubnetId = (this.getNodeParameter('loadBalancersSubnetId', _itemIndex ?? 0) || '') as string;

	const body: IDataObject = { loadBalancersSubnetId };
	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/kube/${kubeId}/updateLoadBalancersSubnetId`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
