import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The pool name',
			displayOptions,
		},
		{
			displayName: 'Is Default',
			name: 'isDefault',
			type: 'boolean',
			default: false,
			description: 'Whether this is the default pool',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Pool operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/dnsZone/{domainName}/pool
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const isDefault = this.getNodeParameter('isDefault', 0) as boolean;

	const body: IDataObject = { name, isDefault };

	const data = (await client.httpPost(`/domain/dnsZone/${domainName}/pool`, body)) as string;
	return this.helpers.returnJsonArray([{ poolId: data }]);
}
