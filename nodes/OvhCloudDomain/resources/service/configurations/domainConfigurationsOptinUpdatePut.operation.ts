import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Optin',
			name: 'optin',
			type: 'json',
			default: '',
			description: 'New optin configuration',
			displayOptions,
		},
	];
}

/**
 * Executes the Save a new optin configuration operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/{serviceName}/configurations/optin
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const body: IDataObject = {};
		const optin = this.getNodeParameter('optin', itemIndex, '') as string;
		if (optin !== '') body['optin'] = JSON.parse(optin);

	const data = (await client.httpPut(`/domain/${encodeURIComponent(serviceName)}/configurations/optin`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
