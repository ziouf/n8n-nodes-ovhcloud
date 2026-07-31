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
			description: 'The domain name',
			displayOptions,
		},
		{
			displayName: 'Pool ID',
			name: 'poolId',
			type: 'string',
			default: '',
			required: true,
			description: 'The pool identifier',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
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
 * Executes the Update Pool operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/dnsZone/{domainName}/pool/{poolId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const poolId = this.getNodeParameter('poolId', 0) as string;
	const name = (this.getNodeParameter('name', 0, '') as string) || undefined;
	const isDefault = (this.getNodeParameter('isDefault', 0, false) as boolean) ?? undefined;

	const body: IDataObject = {};
	if (name) body.name = name;
	if (isDefault !== undefined) body.isDefault = isDefault;

	const data = (await client.httpPut(
		`/domain/dnsZone/${domainName}/pool/${poolId}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
