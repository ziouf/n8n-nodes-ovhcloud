import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
			displayName: 'Approve Type',
			name: 'approveType',
			type: 'options',
			default: 'accept',
			options: [
				{ name: 'Accept', value: 'accept' },
				{ name: 'Reject', value: 'reject' },
			],
			description: 'Approve type for outgoing transfer',
			displayOptions,
		},
		{
			displayName: 'Ident',
			name: 'ident',
			type: 'string',
			default: '',
			description: 'Token given by email to validate identity',
			displayOptions,
		},
	];
}

/**
 * Executes the Approve Outgoing Transfer for a domain operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/{serviceName}/outgoingTransfer/approve
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const body: IDataObject = {};
		const approveType = this.getNodeParameter('approveType', _itemIndex, '') as string;
		if (approveType !== '') body['approveType'] = approveType;
		const ident = this.getNodeParameter('ident', _itemIndex, '') as string;
		if (ident !== '') body['ident'] = ident;

	const data = (await client.httpPost(`/domain/${encodeURIComponent(serviceName)}/outgoingTransfer/approve`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
