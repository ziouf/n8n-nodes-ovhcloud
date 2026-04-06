import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Change Freefax Voicemail Routing operation.
 *
 * HTTP method: POST
 * Endpoint: /freefax/{serviceName}/voicemail/changeRouting
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getFreefaxServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Routing',
			name: 'routing',
			type: 'options',
			default: 'fax',
			required: true,
			options: [
				{ name: 'Fax', value: 'fax' },
				{ name: 'Voicemail', value: 'voicemail' },
			],
			description: 'Routing destination for incoming calls',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Freefax Voicemail Routing operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };

	const routing = this.getNodeParameter('routing', 0) as string;

	const data = (await client.httpPost(`/freefax/${serviceName}/voicemail/changeRouting`, {
		body: { routing },
	})) as IDataObject;
	return [{ json: data }];
}
