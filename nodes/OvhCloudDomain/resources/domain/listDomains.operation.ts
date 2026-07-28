import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Filter',
			name: 'filter' as const,
			type: 'collection' as const,
			placeholder: 'Add Filter' as const,
			default: {} as IDataObject,
			options: [
				{
					displayName: 'Project ID',
					name: 'projectId' as const,
					type: 'string' as const,
					description: 'The project ID to filter domains by',
					default: '' as const,
				},
				{
					displayName: 'Statuses',
					name: 'statuses' as const,
					type: 'multiOptions' as const,
					placeholder: 'Add statuses' as const,
					default: [] as string[],
					options: [
						{ name: 'ACTIVE', value: 'active' },
						{ name: 'DISABLED', value: 'disabled' },
						{ name: 'PAUSED', value: 'paused' },
						{ name: 'PENDING', value: 'pending' },
						{ name: 'SUSPENDED', value: 'suspended' },
					],
				},
			],
	},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	let url = '/domain/name';
	const filter = this.getNodeParameter('filter', 0) as IDataObject;

	if (filter && Object.keys(filter).length > 0) {
		const params: Record<string, string | number> = {};
		if (filter.projectId as string) {
			params['project_id'] = filter.projectId as string;
		}
		if (((filter.statuses as string[]) ?? []).length > 0) {
			params['statuses'] = (filter.statuses as string[]).join(',');
		}

		const queryParts = Object.entries(params)
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
			.join('&');

		if (queryParts.length > 0) {
			url += `?${queryParts}`;
		}
	}

	const data = await client.httpGet(url);
	return this.helpers.returnJsonArray(data as IDataObject[]);
}
