import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'License Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The WorkLight license service name (e.g. license-1)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getWorkLightLicenses', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'license-1',
				},
			],
			displayOptions,
		},
	];
}

/**
 * Update service information for a WorkLight license.
 *
 * HTTP method: PUT
 * Endpoint: /license/worklight/{serviceName}/serviceInfos
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;

	const body: IDataObject = {};

	await client.httpPut(`/license/worklight/${encodeURIComponent(serviceName)}/serviceInfos`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
