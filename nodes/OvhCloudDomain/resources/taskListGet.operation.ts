import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The DNS zone name (e.g. example.com)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getZoneServices' },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'example.com' },
			],
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0, '', { extractValue: true }) as string;
	try {
		const data = await client.paginateResources<IDataObject>(
			`/domain/zone/${zoneName}/task`,
			`/domain/zone/${zoneName}/task/{id}`,
			{ limit: 100 },
		);
		return this.helpers.returnJsonArray(data);
	} catch (error: unknown) {
		throw new Error(error instanceof Error ? error.message : String(error));
	}
}
