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
			displayName: 'Renew',
			name: 'renew',
			type: 'options',
			options: [
				{ name: 'No Auto-Renew', value: 'noAutoRenew' },
				{ name: 'Auto-Renew', value: 'autoRenew' },
			],
			default: 'noAutoRenew',
			description: 'Renewal mode',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Service Information operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{projectId}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const body: IDataObject = {};
	const renew = this.getNodeParameter('renew', _itemIndex ?? 0) as string;
	if (renew) body['renew'] = renew;

	await client.httpPut(`/cloud/project/${projectId}/serviceInfos`, body);

	return this.helpers.returnJsonArray([{ message: 'Service information updated' }]);
}
