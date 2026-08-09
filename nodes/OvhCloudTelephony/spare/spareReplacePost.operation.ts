import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Spare',
			name: 'spare',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your spare',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The phone to replace by the spare',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'Public ip of the phone',
			displayOptions,
		},
	];
}

/**
 * Executes the Post Spare Replace operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/spare/{spare}/replace
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const spare = this.getNodeParameter('spare', _itemIndex) as string;
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const body: IDataObject = {
		domain: domain,
		ip: ip,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost(
		'/telephony/spare/' + encodeURIComponent(spare) + '/replace',
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
