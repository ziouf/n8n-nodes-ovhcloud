import type { IExecuteFunctions } from "n8n-workflow";
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Resource Type',
			name: 'resourceType',
			type: 'options',
			default: 'alldom',
			options: [
				{ name: 'All Domains (Alldom)', value: 'alldom' },
				{ name: 'Specific Domain', value: 'name' },
			],
	},
];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const resourceType = this.getNodeParameter('resourceType', 0) as string;
	let url: string;

	if (resourceType === 'alldom') {
		// For alldom tasks, we need to know the domain name - use a default or extract from input
		try {
			const data = await client.httpGet('/domain/alldom');
			if (!Array.isArray(data) || typeof data[0] !== 'string') {
				throw new Error('Cannot determine alldom name for task lookup.');
			}

			const taskIdParam = this.getNodeParameter('taskId', 0, '') as string;
			url = `/domain/alldom/${encodeURIComponent((data as string[])[0])}/task/${encodeURIComponent(taskIdParam)}`;
		} catch {
			throw new Error('Cannot determine alldom name for task lookup.');
		}
	} else {
		const svcParam = this.getNodeParameter('serviceName', 0) as { value: string };
		const taskIdParam = this.getNodeParameter('taskId', 0, '') as string;

		if (!taskIdParam || typeof taskIdParam === 'object') {
			throw new Error('Task ID is required for task detail retrieval.');
		}

		url = `/domain/name/${encodeURIComponent(svcParam.value)}/task/${encodeURIComponent(taskIdParam)}`;
	}

	const data = await client.httpGet(url);
	return this.helpers.returnJsonArray([data]);
}
