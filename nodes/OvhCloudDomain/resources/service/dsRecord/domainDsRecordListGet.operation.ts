import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Flags',
			name: 'flags',
			type: 'options',
			default: 256,
			options: [
				{ name: '256', value: 256 },
				{ name: '257', value: 257 },
			],
			description: 'Filter the value of flags property (=)',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			default: 'active',
			options: [
				{ name: 'Active', value: 'active' },
				{ name: 'Generated', value: 'generated' },
				{ name: 'Published', value: 'published' },
				{ name: 'Removed', value: 'removed' },
				{ name: 'Retired', value: 'retired' },
				{ name: 'Revoked', value: 'revoked' },
			],
			description: 'Filter the value of status property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the List of domain's DS Records operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/{serviceName}/dsRecord
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const qs: IDataObject = {};
		const flags = this.getNodeParameter('flags', itemIndex, '') as string;
		if (flags !== '' && flags !== undefined) qs['flags'] = flags;
		const status = this.getNodeParameter('status', itemIndex, '') as string;
		if (status !== '' && status !== undefined) qs['status'] = status;

	const data = (await client.httpGet(`/domain/${encodeURIComponent(serviceName)}/dsRecord`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
