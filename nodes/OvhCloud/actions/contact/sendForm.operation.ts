import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * Send form operation for Contact resource.
 *
 * Sends a contact form following the characteristics retrieved from /contact/form:
 * - HTTP POST request to `/contact/form/send` endpoint
 * - Requires `type` (string) and `form` (array of key/value pairs)
 * - Returns confirmation of form submission
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Send Form operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Type',
			name: 'type',
			description: 'The type of the contact form to send',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Form',
			name: 'form',
			description: 'Form fields as key/value pairs matching the form characteristics',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			required: true,
			typeOptions: {
				multipleValues: true,
				multipleValueButtonText: 'Add Field',
			},
			options: [
				{
					displayName: 'Key',
					name: 'key',
					description: 'The field key as defined in the form characteristics',
					type: 'string',
					default: '',
				},
				{
					displayName: 'Value',
					name: 'value',
					description: 'The field value to submit',
					type: 'string',
					default: '',
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Send Form operation.
 *
 * Sends a contact form to the OVH API with the specified type and form fields.
 *
 * HTTP method: POST
 * Endpoint: /contact/form/send
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the form submission response
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const type = this.getNodeParameter('type', 0, '') as string;
	const form = this.getNodeParameter('form', 0, []) as Array<{ key: string; value: string }>;

	const body: IDataObject = {
		type,
		form: form.map((field) => ({
			key: field.key,
			value: field.value,
		})),
	};

	const data = (await client.httpPost('/contact/form/send', body)) as IDataObject;
	return [{ json: data }];
}
