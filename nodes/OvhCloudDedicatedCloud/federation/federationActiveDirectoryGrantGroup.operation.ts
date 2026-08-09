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
			description: 'Domain of the service',
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
			displayName: 'Group Name',
			name: 'groupName',
			type: 'string',
			default: '',
			required: true,
			description: 'Active Directory group name (pre-Windows 2000 name), e.g. mygroup',
			displayOptions,
		},
	];
}

/**
 * Executes the Grant Active Directory Group operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryGroup
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const activeDirectoryId = this.getNodeParameter('activeDirectoryId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.groupName = this.getNodeParameter('groupName', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/federation/activeDirectory/${activeDirectoryId}/grantActiveDirectoryGroup`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
