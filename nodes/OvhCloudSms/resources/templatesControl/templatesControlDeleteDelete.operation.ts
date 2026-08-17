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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the template',
			displayOptions,
		},
		{
			...SERVICE_NAME,
			displayOptions,
		},
	];
}

/**
 * Executes the Delete /sms/{serviceName}/templatesControl/{name} operation.
 *
 * HTTP method: DELETE
 * Endpoint: /sms/{serviceName}/templatesControl/{name}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const data = (await getClient(this).httpDelete(
		`/sms/${encodeURIComponent(serviceName)}/templatesControl/${encodeURIComponent(name)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
