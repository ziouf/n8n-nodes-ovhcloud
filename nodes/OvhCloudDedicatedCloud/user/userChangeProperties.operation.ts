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
			displayName: 'Can Manage IP Failovers',
			name: 'canManageIpFailOvers',
			type: 'boolean',
			default: false,
			description: 'Whether defines if the user can manage ip failovers',
			displayOptions,
		},
		{
			displayName: 'Can Manage Network',
			name: 'canManageNetwork',
			type: 'boolean',
			default: false,
			description: 'Whether defines if the user can manage the network',
			displayOptions,
		},
		{
			displayName: 'Can Manage Rights',
			name: 'canManageRights',
			type: 'boolean',
			default: false,
			description: 'Whether defines if the user can manage the users rights',
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'Email address of the user',
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
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'First name of the user',
			displayOptions,
		},
		{
			displayName: 'Full Admin Read Only',
			name: 'fullAdminRo',
			type: 'boolean',
			default: false,
			description: 'Whether defines if the user is a full admin in readonly',
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
			displayName: 'NSX Right',
			name: 'nsxRight',
			type: 'boolean',
			default: false,
			description: 'Whether is this User able to access nsx interface (requires NSX option)',
			displayOptions,
		},
		{
			displayName: 'Phone Number',
			name: 'phoneNumber',
			type: 'string',
			default: '',
			description: 'Mobile phone number of the user in international format (+prefix.number)',
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
			displayName: 'Token Validator',
			name: 'tokenValidator',
			type: 'boolean',
			default: false,
			description: 'Whether defines if the user can confirm security tokens (if a compatible option is enabled)',
			displayOptions,
		},
	];
}

/**
 * Executes the Update user properties operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/user/{userId}/changeProperties
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const userId = this.getNodeParameter('userId', itemIndex) as string;
	const body: IDataObject = {};
	const canManageIpFailOvers = this.getNodeParameter('canManageIpFailOvers', itemIndex) as boolean;
	if (canManageIpFailOvers) { body.canManageIpFailOvers = canManageIpFailOvers; }
	const canManageNetwork = this.getNodeParameter('canManageNetwork', itemIndex) as boolean;
	if (canManageNetwork) { body.canManageNetwork = canManageNetwork; }
	const canManageRights = this.getNodeParameter('canManageRights', itemIndex) as boolean;
	if (canManageRights) { body.canManageRights = canManageRights; }
	const email = this.getNodeParameter('email', itemIndex, '') as string;
	if (email !== '') { body.email = email; }
	const encryptionRight = this.getNodeParameter('encryptionRight', itemIndex) as boolean;
	if (encryptionRight) { body.encryptionRight = encryptionRight; }
	const firstName = this.getNodeParameter('firstName', itemIndex, '') as string;
	if (firstName !== '') { body.firstName = firstName; }
	const fullAdminRo = this.getNodeParameter('fullAdminRo', itemIndex) as boolean;
	if (fullAdminRo) { body.fullAdminRo = fullAdminRo; }
	const lastName = this.getNodeParameter('lastName', itemIndex, '') as string;
	if (lastName !== '') { body.lastName = lastName; }
	const nsxRight = this.getNodeParameter('nsxRight', itemIndex) as boolean;
	if (nsxRight) { body.nsxRight = nsxRight; }
	const phoneNumber = this.getNodeParameter('phoneNumber', itemIndex, '') as string;
	if (phoneNumber !== '') { body.phoneNumber = phoneNumber; }
	const receiveAlerts = this.getNodeParameter('receiveAlerts', itemIndex) as boolean;
	if (receiveAlerts) { body.receiveAlerts = receiveAlerts; }
	const tokenValidator = this.getNodeParameter('tokenValidator', itemIndex) as boolean;
	if (tokenValidator) { body.tokenValidator = tokenValidator; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/user/${userId}/changeProperties`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
