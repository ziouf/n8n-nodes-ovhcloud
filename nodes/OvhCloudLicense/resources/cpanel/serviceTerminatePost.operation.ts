import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'License Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Cpanel license service name',
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
					placeholder: 'cpanel-1',
				},
			],
			displayOptions,
		},
	];
}


/**
 * Ask for the termination of your service.
 *
 * HTTP method: POST
 * Endpoint: /license/cpanel/{serviceName}/terminate
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', { extractValue: true }) as string;
	const body: IDataObject = {};
	const data = (await client.httpPost('/license/cpanel/' + encodeURIComponent(serviceName) + '/terminate', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

