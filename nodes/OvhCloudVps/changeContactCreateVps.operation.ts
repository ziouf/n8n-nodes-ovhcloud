import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/** Launch a change of contact for the VPS service. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'New Contact (Nichandle)',
			name: 'newContact',
			type: 'string',
			default: '',
			required: true,
			description: 'The nichandle of the new contact for this VPS service',
			placeholder: 'NICHANDLE1',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const newContact = this.getNodeParameter('newContact', itemIndex ?? 0) as string;

	const data = (await client.httpPost(`/vps/${serviceName}/changeContact`, {
		newContact,
	})) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
