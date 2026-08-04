import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name/ID of the VMware on OVHcloud infrastructure',
			displayOptions,
		},
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Commentary about your termination request',
			displayOptions,
		},
		{
			displayName: 'Future Use',
			name: 'futureUse',
			type: 'string',
			default: '',
			description: 'What next after your termination request',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			description: 'Reason of your termination request',
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The termination token sent by email to the admin contact',
			displayOptions,
		},
	];
}

/**
 * Executes the Confirm service termination operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const body: IDataObject = {};
	const commentary = this.getNodeParameter('commentary', itemIndex, '') as string;
	if (commentary !== '') { body.commentary = commentary; }
	const futureUse = this.getNodeParameter('futureUse', itemIndex, '') as string;
	if (futureUse !== '') { body.futureUse = futureUse; }
	const reason = this.getNodeParameter('reason', itemIndex, '') as string;
	if (reason !== '') { body.reason = reason; }
	body.token = this.getNodeParameter('token', itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/confirmTermination`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
