import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create an external contact for an Email Mxplan service.
 *
 * HTTP method: POST
 * Endpoint: /email/mxplan/{service}/externalContact
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
	];
}

/**
 * Executes the Create External Contact operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: service } = this.getNodeParameter('service', 0, {
		extractValue: true,
	}) as { value: string };
	const body: IDataObject = {
		externalEmailAddress: this.getNodeParameter('externalEmailAddress', 0) as string,
	};
	const data = (await client.httpPost(`/email/mxplan/${service}/externalContact`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
