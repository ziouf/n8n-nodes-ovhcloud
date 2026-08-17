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
			displayName: 'Update Policy',
			name: 'updatePolicy',
			type: 'options',
			required: true,
			default: 'ALWAYS_UPDATE',
			options: [
				{ name: 'Always Update', value: 'ALWAYS_UPDATE' },
				{ name: 'Minimal Downtime', value: 'MINIMAL_DOWNTIME' },
				{ name: 'Never Update', value: 'NEVER_UPDATE' },
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Update Kube Policy operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/kube/{kubeId}/updatePolicy
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const kubeId = this.getNodeParameter('kubeId', _itemIndex ?? 0) as string;
	const updatePolicy = (this.getNodeParameter('updatePolicy', _itemIndex ?? 0) || '') as string;
	const body: IDataObject = { updatePolicy };
	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/kube/${kubeId}/updatePolicy`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
