import type { IExecuteFunctions } from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Resource Name',
			name: 'resourceName',
			type: 'string' as const,
			default: '',
			required: true,
			description: 'The name of the web hosting resource (e.g. myResourceName)',
			placeholder: 'myResourceName',
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
_itemIndex?: number,
): Promise<import('n8n-workflow').INodeExecutionData[]> {
	const client = getClient(this);
	const data = (await client.httpGet('/webhosting/resource')) as import('n8n-workflow').IDataObject;
	return this.helpers.returnJsonArray([data]);
}
