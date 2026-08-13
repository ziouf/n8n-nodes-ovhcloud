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
				description: 'The name/ID of the VMware on OVHcloud infrastructure',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
			displayOptions,
		},
		{
			displayName: 'Can Add Resource',
			name: 'canAddRessource',
			type: 'boolean',
			default: false,
			description: 'Whether is this User able to add ressources in the Datacenter he has access ? (default is no right to add ressource)',
			displayOptions,
		},
		{
			displayName: 'Can Manage Rights',
			name: 'canManageRights',
			type: 'boolean',
			default: false,
			description: 'Whether is this user able to manage the users rights',
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'The user email. If this field is empty, user informations will be sent to the dedicatedCloud administrator contact.',
			displayOptions,
		},
		{
			displayName: 'Encryption Right',
			name: 'encryptionRight',
			type: 'boolean',
			default: false,
			description: 'Whether defines if the user can manage encryption / KMS configuration',
			displayOptions,
		},
		{
			displayName: 'Expiration Date',
			name: 'expirationDate',
			type: 'string',
			default: '',
			description: 'Date of removal of the user',
			displayOptions,
		},
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'First name of the user',
			displayOptions,
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
			description: 'Last name of the user',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the user (login)',
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
			description: 'Determine how this user will be able to act on this VMware on OVHcloud v(x)Lans',
			displayOptions,
		},
		{
			displayName: 'NSX Right',
			name: 'nsxRight',
			type: 'boolean',
			default: false,
			description: 'Whether is this User able to access nsx interface (requires NSX option)',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
			description: 'The user password. It must fits your VMware on OVHcloud password policy. If this field is empty, a random password will be generated and sent by email.',
			displayOptions,
		},
		{
			displayName: 'Phone Number',
			name: 'phoneNumber',
			type: 'string',
			default: '',
			description: 'Mobile phone number of the user',
			displayOptions,
		},
		{
			displayName: 'Receive Alerts',
			name: 'receiveAlerts',
			type: 'boolean',
			default: false,
			description: 'Whether defines if the user receives technical alerts',
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
			description: 'Determine what kind of access the User will have in all Datacenters of your VMware on OVHcloud (default is disabled)',
			displayOptions,
		},
		{
			displayName: 'Token Validator',
			name: 'tokenValidator',
			type: 'boolean',
			default: false,
			description: 'Whether defines if the user can confirm security tokens (if a compatible option is enabled)',
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
			description: 'Determine how this user will be able to act on this VMware on OVHcloud VM Network',
			displayOptions,
		},
	];
}

/**
 * Executes the Create user operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/user
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const canAddRessource = this.getNodeParameter('canAddRessource', _itemIndex) as boolean;
	if (canAddRessource) { body.canAddRessource = canAddRessource; }
	const canManageRights = this.getNodeParameter('canManageRights', _itemIndex) as boolean;
	if (canManageRights) { body.canManageRights = canManageRights; }
	const email = this.getNodeParameter('email', _itemIndex, '') as string;
	if (email !== '') { body.email = email; }
	const encryptionRight = this.getNodeParameter('encryptionRight', _itemIndex) as boolean;
	if (encryptionRight) { body.encryptionRight = encryptionRight; }
	const expirationDate = this.getNodeParameter('expirationDate', _itemIndex, '') as string;
	if (expirationDate !== '') { body.expirationDate = expirationDate; }
	const firstName = this.getNodeParameter('firstName', _itemIndex, '') as string;
	if (firstName !== '') { body.firstName = firstName; }
	const lastName = this.getNodeParameter('lastName', _itemIndex, '') as string;
	if (lastName !== '') { body.lastName = lastName; }
	body.name = this.getNodeParameter('name', _itemIndex) as string;
	const networkRole = this.getNodeParameter('networkRole', _itemIndex, '') as string;
	if (networkRole !== '') { body.networkRole = networkRole; }
	const nsxRight = this.getNodeParameter('nsxRight', _itemIndex) as boolean;
	if (nsxRight) { body.nsxRight = nsxRight; }
	const password = this.getNodeParameter('password', _itemIndex, '') as string;
	if (password !== '') { body.password = password; }
	const phoneNumber = this.getNodeParameter('phoneNumber', _itemIndex, '') as string;
	if (phoneNumber !== '') { body.phoneNumber = phoneNumber; }
	const receiveAlerts = this.getNodeParameter('receiveAlerts', _itemIndex) as boolean;
	if (receiveAlerts) { body.receiveAlerts = receiveAlerts; }
	const right = this.getNodeParameter('right', _itemIndex, '') as string;
	if (right !== '') { body.right = right; }
	const tokenValidator = this.getNodeParameter('tokenValidator', _itemIndex) as boolean;
	if (tokenValidator) { body.tokenValidator = tokenValidator; }
	const vmNetworkRole = this.getNodeParameter('vmNetworkRole', _itemIndex, '') as string;
	if (vmNetworkRole !== '') { body.vmNetworkRole = vmNetworkRole; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/user`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
