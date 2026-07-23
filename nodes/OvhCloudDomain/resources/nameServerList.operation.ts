import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Domain Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The domain service name (e.g. example.eu.org)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getDomainServices' },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'example.eu.org' },
			],
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
		extractValue: true,
	}) as string;

	try {
		const data = await client.paginateResources<IDataObject>(
			`/domain/${serviceName}/nameServer`,
			`/domain/${serviceName}/nameServer/{id}`,
		);
		return this.helpers.returnJsonArray(data);
	} catch (error: unknown) {
		throw new Error(error instanceof Error ? error.message : String(error));
	}
}
