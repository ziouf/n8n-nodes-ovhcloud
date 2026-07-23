import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
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
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The task identifier (e.g. 1234567)',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', itemIndex, '', {
		extractValue: true,
	}) as string;
	const taskId = String(this.getNodeParameter('taskId', itemIndex));

	try {
		const data = (await client.httpGet(`/domain/zone/${zoneName}/task/${taskId}`)) as IDataObject;
		return this.helpers.returnJsonArray([data]);
	} catch (error: unknown) {
		throw new Error(error instanceof Error ? error.message : String(error));
	}
}
