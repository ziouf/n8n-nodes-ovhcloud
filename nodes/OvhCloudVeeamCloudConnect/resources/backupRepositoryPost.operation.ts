import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Veeam Cloud Connect Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The domain of the Veeam Cloud Connect service (e.g. vcc-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getVeeamCloudConnectServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'vcc-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Quota',
			name: 'quota',
			type: 'number',
			default: 100,
			required: true,
			description: 'Quota in GB for the repository',
			displayOptions,
		},
	];
}

/**
 * Create a new backup repository for a service.
 *
 * HTTP method: POST
 * Endpoint: /veeamCloudConnect/{serviceName}/backupRepository
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const quota = this.getNodeParameter('quota', 0, 100) as number;

	const body: IDataObject = {};
	if (quota !== undefined) body.quota = quota;
	const data = (await client.httpPost(
		`/veeamCloudConnect/${encodeURIComponent(serviceName)}/backupRepository`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
