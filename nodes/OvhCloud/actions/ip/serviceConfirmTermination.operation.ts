import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * Confirm Termination operation.
 *
 * Confirms service termination for an IP service.
 *
 * HTTP method: POST
 * Endpoint: /ip/service/{serviceName}/confirmTermination
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP service name',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			required: true,
			description: 'Commentary for the termination',
			displayOptions,
		},
		{
			displayName: 'Future Use',
			name: 'futureUse',
			type: 'options',
			options: [
				{ name: 'None', value: 'none' },
				{ name: 'Portability', value: 'portability' },
			],
			default: 'none',
			required: true,
			description: 'What to do with the service after termination',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'options',
			options: [
				{ name: 'Features Not Suitable', value: 'featuresNotSuitable' },
				{ name: 'Other', value: 'other' },
				{ name: 'Too Expensive', value: 'tooExpensive' },
			],
			default: 'other',
			required: true,
			description: 'Reason for termination',
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Termination token',
			displayOptions,
		},
	];
}

/**
 * Executes the Confirm Termination operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const commentary = this.getNodeParameter('commentary', 0) as string;
	const futureUse = this.getNodeParameter('futureUse', 0) as string;
	const reason = this.getNodeParameter('reason', 0) as string;
	const token = this.getNodeParameter('token', 0) as string;
	const data = (await client.httpPost(`/ip/service/${serviceName}/confirmTermination`, {
		body: { commentary, futureUse, reason, token },
	})) as IDataObject;
	return [{ json: data }];
}
