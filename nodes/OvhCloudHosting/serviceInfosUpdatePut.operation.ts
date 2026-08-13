import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Automatic Renewal',
			name: 'renewAutomatic',
			type: 'boolean',
			default: false,
			description: 'Whether to automatically renew the service',
			displayOptions,
		},
	];
}

/**
 * Update service information
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/{serviceName}/serviceInfos
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const renewAutomatic = this.getNodeParameter('renewAutomatic', _itemIndex, false) as boolean;
	const body: IDataObject = { renew: { automatic: renewAutomatic } };
	const data = (await client.httpPut(
		`/hosting/web/${encodeURIComponent(serviceName)}/serviceInfos`,
		body,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
