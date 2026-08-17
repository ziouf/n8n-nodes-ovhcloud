import { SERVICE_NAME_2 } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will permanently confirm the termination of the confirm termination.', displayOptions),
		{
			...SERVICE_NAME_2,
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
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const commentary = this.getNodeParameter('commentary', _itemIndex, '') as string;
	if (commentary !== '') { body.commentary = commentary; }
	const futureUse = this.getNodeParameter('futureUse', _itemIndex, '') as string;
	if (futureUse !== '') { body.futureUse = futureUse; }
	const reason = this.getNodeParameter('reason', _itemIndex, '') as string;
	if (reason !== '') { body.reason = reason; }
	body.token = this.getNodeParameter('token', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/confirmTermination`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
