import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedCloudServices',
				displayName: 'Service Name',
				description: 'Domain of the service',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
			displayOptions,
		},
		{
			displayName: 'Active Directory ID',
			name: 'activeDirectoryId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the Active Directory',
			displayOptions,
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'Active Directory user name (pre-Windows 2000 name), e.g. jdoe@example.com or jdoe',
			displayOptions,
		},
	];
}

/**
 * Executes the Grant Active Directory User operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryUser
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const activeDirectoryId = this.getNodeParameter('activeDirectoryId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.username = this.getNodeParameter('username', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/federation/activeDirectory/${activeDirectoryId}/grantActiveDirectoryUser`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
