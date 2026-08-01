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
			displayName: 'Housing Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'housingListGet' },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'h12345678.ovh.net',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Housing Properties',
			name: 'housing',
			type: 'json',
			default: '{}',
			description: 'New housing properties to update',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Housing operation.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/housing/{serviceName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', {
		extractValue: true,
	}) as string;
	const housing = this.getNodeParameter('housing', 0) as IDataObject;
	await client.httpPut(`/dedicated/housing/${serviceName}`, housing);
	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
