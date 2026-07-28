import type { IExecuteFunctions } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Resource Type',
			name: 'resourceType' as const,
			type: 'options' as const,
			default: 'alldom' as const,
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
		try {
			const data = await client.httpGet('/domain/alldom');
			if (!Array.isArray(data) || typeof data[0] !== 'string') {
				throw new Error('Cannot determine alldom names for task listing.');
			}

			const allTasks: Record<string, unknown>[] = [];
			for (const name of data as string[]) {
				try {
					const tasksData = await client.httpGet(`/domain/alldom/${encodeURIComponent(name)}/task`);
					if (Array.isArray(tasksData)) {
						allTasks.push(
							...(tasksData as Record<string, unknown>[]).map((t: Record<string, unknown>) => ({
								...t,
								alldomName: name,
							})),
						);
					} else if (typeof tasksData === 'string') {
						const taskDetail = await client.httpGet(
							`/domain/alldom/${encodeURIComponent(name)}/task/${tasksData}`,
						);
						allTasks.push({ ...(taskDetail as Record<string, unknown>), alldomName: name });
					}
				} catch {
					// Skip domains that don't have tasks or return errors
				}
			}
			return this.helpers.returnJsonArray(allTasks);
		} catch {
			throw new Error('Failed to retrieve alldom task list.');
		}
	} else {
		const svcParam = this.getNodeParameter('serviceName', 0) as { value: string };
		url = `/domain/name/${encodeURIComponent(svcParam.value)}/task`;

		try {
			const data = await client.httpGet(url);
			if (typeof data === 'string') {
				const taskDetail = await client.httpGet(`${url}/${data}`);
				return this.helpers.returnJsonArray([taskDetail as Record<string, unknown>]);
			}
			return this.helpers.returnJsonArray(data as Record<string, unknown>[]);
		} catch {
			throw new Error('Failed to retrieve domain task list.');
		}
	}
}
