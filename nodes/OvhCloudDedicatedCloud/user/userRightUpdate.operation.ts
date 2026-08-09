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
			displayName: 'Right ID',
			name: 'rightId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
		{
			displayName: 'Can Add Resource',
			name: 'canAddRessource',
			type: 'boolean',
			default: false,
			description: 'Whether determine if the user can add ressources in your VMware on OVHcloud',
			displayOptions,
		},
		{
			displayName: 'Network Role',
			name: 'networkRole',
			type: 'options',
			options: [
				{ name: 'Admin', value: 'admin' },
				{ name: 'Manager', value: 'manager' },
				{ name: 'noAccess', value: 'noAccess' },
				{ name: 'Readonly', value: 'readonly' },
			],
			default: 'admin',
			description: 'Determine how this user can interact with the VMware on OVHcloud V(x)Lans',
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
			description: 'Determine what kind of access the User will have in this Datacenter of your VMware on OVHcloud',
			displayOptions,
		},
		{
			displayName: 'VM Network Role',
			name: 'vmNetworkRole',
			type: 'options',
			options: [
				{ name: 'Admin', value: 'admin' },
				{ name: 'noAccess', value: 'noAccess' },
				{ name: 'Readonly', value: 'readonly' },
			],
			default: 'admin',
			description: 'Determine how this user can interact with the VMware on OVHcloud VM Network',
			displayOptions,
		},
	];
}

/**
 * Executes the Update user datacenter right operation.
 *
 * HTTP method: PUT
 * Endpoint: /dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userId = this.getNodeParameter('userId', _itemIndex) as string;
	const rightId = this.getNodeParameter('rightId', _itemIndex) as string;
	const body: IDataObject = {};
	const canAddRessource = this.getNodeParameter('canAddRessource', _itemIndex) as boolean;
	if (canAddRessource) { body.canAddRessource = canAddRessource; }
	const networkRole = this.getNodeParameter('networkRole', _itemIndex, '') as string;
	if (networkRole !== '') { body.networkRole = networkRole; }
	const right = this.getNodeParameter('right', _itemIndex, '') as string;
	if (right !== '') { body.right = right; }
	const vmNetworkRole = this.getNodeParameter('vmNetworkRole', _itemIndex, '') as string;
	if (vmNetworkRole !== '') { body.vmNetworkRole = vmNetworkRole; }
	const data = (await client.httpPut(`/dedicatedCloud/${serviceName}/user/${userId}/right/${rightId}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
