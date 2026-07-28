import type { IExecuteFunctions } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
): Promise<import('n8n-workflow').INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/webhosting/resource')) as import('n8n-workflow').IDataObject;
	return this.helpers.returnJsonArray([data]);
}
