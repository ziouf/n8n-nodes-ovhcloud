import { SERVICE_NAME_2 } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME_2,
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description of your VMware on OVHcloud',
			displayOptions,
		},
		{
			displayName: 'Enable SSL V3',
			name: 'sslV3',
			type: 'boolean',
			default: false,
			description: 'Whether enable SSL v3 support. Warning: this option is not recommended as it was recognized as a security breach. If this is enabled, we advise you to enable the filtered User access policy',
			displayOptions,
		},
		{
			displayName: 'User Access Policy',
			name: 'userAccessPolicy',
			type: 'options',
			options: [
				{ name: 'Filtered', value: 'filtered' },
				{ name: 'Open', value: 'open' },
			],
			default: 'filtered',
			description: 'Access policy of your VMware on OVHcloud: opened to each IP or filtered',
			displayOptions,
		},
		{
			displayName: 'User Limit Concurrent Session',
			name: 'userLimitConcurrentSession',
			type: 'number',
			default: 0,
			description: 'The maximum amount of connected users allowed on the VMware on OVHcloud management interface',
			displayOptions,
		},
		{
			displayName: 'User Logout Policy',
			name: 'userLogoutPolicy',
			type: 'options',
			options: [
				{ name: 'First', value: 'first' },
				{ name: 'Last', value: 'last' },
			],
			default: 'first',
			description: 'Logout policy of your VMware on OVHcloud',
			displayOptions,
		},
		{
			displayName: 'User Session Timeout',
			name: 'userSessionTimeout',
			type: 'number',
			default: 0,
			description: 'The timeout (in seconds) for the user sessions on the VMware on OVHcloud management interface. 0 value disable the timeout.',
			displayOptions,
		},
	];
}

/**
 * Executes the Update VMware on OVHcloud properties operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/changeProperties
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', _itemIndex, '') as string;
	if (description !== '') { body.description = description; }
	const sslV3 = this.getNodeParameter('sslV3', _itemIndex) as boolean;
	if (sslV3) { body.sslV3 = sslV3; }
	const userAccessPolicy = this.getNodeParameter('userAccessPolicy', _itemIndex, '') as string;
	if (userAccessPolicy !== '') { body.userAccessPolicy = userAccessPolicy; }
	const userLimitConcurrentSession = this.getNodeParameter('userLimitConcurrentSession', _itemIndex) as number;
	if (userLimitConcurrentSession) { body.userLimitConcurrentSession = userLimitConcurrentSession; }
	const userLogoutPolicy = this.getNodeParameter('userLogoutPolicy', _itemIndex, '') as string;
	if (userLogoutPolicy !== '') { body.userLogoutPolicy = userLogoutPolicy; }
	const userSessionTimeout = this.getNodeParameter('userSessionTimeout', _itemIndex) as number;
	if (userSessionTimeout) { body.userSessionTimeout = userSessionTimeout; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/changeProperties`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
