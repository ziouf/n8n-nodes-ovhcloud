import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			description: 'The virtual number',
			displayOptions,
		},
		{
			...SERVICE_NAME,
			displayOptions,
		},
	];
}

/**
 * Executes the Get /sms/{serviceName}/virtualNumbers/{number}/chatAccess operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/virtualNumbers/{number}/chatAccess
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const number = this.getNodeParameter('number', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const data = (await getClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/virtualNumbers/${encodeURIComponent(number)}/chatAccess`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
