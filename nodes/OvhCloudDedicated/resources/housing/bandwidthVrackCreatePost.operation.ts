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
			description: 'The housing service name',
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
			displayName: 'vRack',
			name: 'vrack',
			type: 'string',
			default: '',
			required: true,
			description: 'The vRack name to bind bandwidth to',
			placeholder: 'e.g. my-vrack',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Housing Bandwidth vRack operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/housing/{serviceName}/bandwidthvRack
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', {
		extractValue: true,
	}) as string;
	const vrack = (this.getNodeParameter('vrack', 0) as string) || '';

	const body: IDataObject = { vrack };
	const data = (await client.httpPost(
		`/dedicated/housing/${serviceName}/bandwidthvRack`,
		body,
	)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
