import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Change Freefax Voicemail Password operation.
 *
 * HTTP method: POST
 * Endpoint: /freefax/{serviceName}/voicemail/changePassword
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
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'New voicemail password (4 digits)',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Freefax Voicemail Password operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };

	const password = this.getNodeParameter('password', 0) as string;

	const data = (await client.httpPost(`/freefax/${serviceName}/voicemail/changePassword`, {
		body: { password },
	})) as IDataObject;
	return [{ json: data }];
}
