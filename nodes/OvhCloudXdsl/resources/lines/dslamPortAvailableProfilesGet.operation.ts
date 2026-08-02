import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Xdsl Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The name of the xDSL service (e.g. xdsl-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'xdsl-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Line Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			description: 'Number of the line',
			displayOptions,
		},
	];
}

/**
 * List all the available profiles for a specific DSLAM port.
 *
 * HTTP method: GET
 * Endpoint: /xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const number = this.getNodeParameter('number', 0) as string;

	const data = (await client.httpGet(`/xdsl/${encodeURIComponent(serviceName)}/lines/${encodeURIComponent(number)}/dslamPort/availableProfiles`)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { id: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
