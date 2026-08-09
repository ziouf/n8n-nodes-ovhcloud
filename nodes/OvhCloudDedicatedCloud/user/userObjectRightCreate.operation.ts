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
			description: 'The name/ID of the VMware on OVHcloud infrastructure',
			displayOptions,
		},
		{
			displayName: 'User ID',
			name: 'userId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
		{
			displayName: 'Propagate',
			name: 'propagate',
			type: 'boolean',
			default: false,
			description: 'Whether right propagation on children objects',
			displayOptions,
		},
		{
			displayName: 'Right',
			name: 'right',
			type: 'options',
			options: [
				{ name: 'Admin', value: 'admin' },
				{ name: 'Disabled', value: 'disabled' },
				{ name: 'Readonly', value: 'readonly' },
				{ name: 'Readwrite', value: 'readwrite' },
			],
			default: 'admin',
			required: true,
			description: 'User access on the VMware object',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			options: [
				{ name: 'Cluster', value: 'cluster' },
				{ name: 'Datastore', value: 'datastore' },
				{ name: 'Dvportgroup', value: 'dvportgroup' },
				{ name: 'Folder', value: 'folder' },
				{ name: 'Pool', value: 'pool' },
				{ name: 'Vm', value: 'vm' },
			],
			default: 'cluster',
			required: true,
			description: 'Type of the object',
			displayOptions,
		},
		{
			displayName: 'VMware Object ID',
			name: 'vmwareObjectId',
			type: 'string',
			default: '',
			required: true,
			description: 'The VMware MoRef of the object',
			displayOptions,
		},
	];
}

/**
 * Executes the Create user object right operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/user/{userId}/objectRight
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userId = this.getNodeParameter('userId', _itemIndex) as string;
	const body: IDataObject = {};
	const propagate = this.getNodeParameter('propagate', _itemIndex) as boolean;
	if (propagate) { body.propagate = propagate; }
	body.right = this.getNodeParameter('right', _itemIndex) as string;
	body.type = this.getNodeParameter('type', _itemIndex) as string;
	body.vmwareObjectId = this.getNodeParameter('vmwareObjectId', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/user/${userId}/objectRight`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
