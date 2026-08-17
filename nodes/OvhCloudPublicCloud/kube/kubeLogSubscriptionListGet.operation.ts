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
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			description: 'Filter on a specific kind (e.g., audit)',
			displayOptions,
		},
	];
}

/**
 * Executes the List Kube Log Subscriptions operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/kube/{kubeId}/log/subscription
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const kubeId = this.getNodeParameter('kubeId', _itemIndex ?? 0) as string;
	const kind = (this.getNodeParameter('kind', _itemIndex ?? 0) || '') as string;

	const qs: IDataObject = {};
	if (kind) qs.kind = kind;

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/kube/${kubeId}/log/subscription`,
		qs,
	)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
