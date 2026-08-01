import type { IExecuteFunctions } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: import('n8n-workflow').IDisplayOptions) {
	return [
		{
			displayName: 'Web Hosting Resource Name',
			name: 'resourceName',
			type: 'string' as const,
			default: '',
			required: true,
			description: 'The name of the web hosting resource (e.g. myResourceName)',
			placeholder: 'myResourceName',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
): Promise<import('n8n-workflow').INodeExecutionData[]> {
	const client = new ApiClient(this);
	const resourceName = this.getNodeParameter('resourceName', 0) as string;
	const data = (await client.httpPost(
		`/webhosting/resource/${resourceName}/website`,
		{},
	)) as import('n8n-workflow').IDataObject;
	return this.helpers.returnJsonArray([data]);
}
