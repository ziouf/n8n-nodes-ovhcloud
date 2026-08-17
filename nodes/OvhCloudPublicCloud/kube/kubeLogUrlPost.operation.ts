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
			required: true,
			description: 'Log kind name',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Kube Log URL operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/kube/{kubeId}/log/url
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const kubeId = this.getNodeParameter('kubeId', _itemIndex ?? 0) as string;
	const kind = (this.getNodeParameter('kind', _itemIndex ?? 0) || '') as string;

	const body: IDataObject = { kind };
	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/kube/${kubeId}/log/url`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
