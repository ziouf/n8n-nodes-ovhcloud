import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OverTheBox Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your OverTheBox offer (e.g. overthebox-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getOverTheBoxServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'overthebox-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Device ID',
			name: 'deviceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the device',
			displayOptions,
		},
	];
}

/**
 * Link a device to this service.
 *
 * HTTP method: POST
 * Endpoint: /overTheBox/{serviceName}/linkDevice
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const deviceId = (this.getNodeParameter('deviceId', 0, '') as string) || '';

	const body: IDataObject = {};
	if (deviceId) body.deviceId = deviceId;
	await client.httpPost(`/overTheBox/${encodeURIComponent(serviceName)}/linkDevice`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
