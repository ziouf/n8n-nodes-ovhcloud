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
			displayName: 'Public Cloud Project',
			name: 'publicCloudProjectId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By ID',
					name: 'name',
					type: 'string',
					placeholder: '12345678-1234-1234-1234-1234567890ab',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Instances',
			name: 'instances',
			type: 'string',
			default: '',
			required: true,
			description: 'Comma-separated list of instance IDs to activate monthly billing on',
			displayOptions,
		},
	];
}

/**
 * Executes the Activate Monthly Billing operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/activateMonthlyBilling
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const instances = this.getNodeParameter('instances', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		instances: instances.split(',').map((id) => id.trim()),
	};

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/activateMonthlyBilling`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
