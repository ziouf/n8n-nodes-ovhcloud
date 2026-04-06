import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update an external contact for an Email Mxplan service.
 *
 * HTTP method: PUT
 * Endpoint: /email/mxplan/{service}/externalContact/{externalEmailAddress}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service',
			name: 'service',
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
						searchListMethod: 'getEmailMxplanServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'External Email Address',
			name: 'externalEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'The external email address of the contact',
			displayOptions,
		},
		{
			displayName: 'Raw Body (JSON)',
			name: 'rawBody',
			type: 'json',
			default: '{}',
			description: 'External contact fields to update as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Update External Contact operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: service } = this.getNodeParameter('service', 0, {
		extractValue: true,
	}) as { value: string };
	const externalEmailAddress = this.getNodeParameter('externalEmailAddress', 0) as string;
	const rawBody = this.getNodeParameter('rawBody', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPut(
		`/email/mxplan/${service}/externalContact/${externalEmailAddress}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
