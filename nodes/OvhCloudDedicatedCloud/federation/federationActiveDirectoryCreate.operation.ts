import { SERVICE_NAME } from '../serviceName';
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
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Base DN For Groups',
			name: 'baseDnForGroups',
			type: 'string',
			default: '',
			required: true,
			description: 'Active Directory base DN for groups, e.g. dc=example,dc=com',
			displayOptions,
		},
		{
			displayName: 'Base DN For Users',
			name: 'baseDnForUsers',
			type: 'string',
			default: '',
			required: true,
			description: 'Active Directory base DN for users, e.g. dc=example,dc=com',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description of your option access network',
			displayOptions,
		},
		{
			displayName: 'Domain Alias',
			name: 'domainAlias',
			type: 'string',
			default: '',
			required: true,
			description: 'Active Directory NetBIOS name, e.g. example',
			displayOptions,
		},
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'Active Directory domain name, e.g. example.com',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'IP address of the remote service, e.g. 123.100.200.0',
			displayOptions,
		},
		{
			displayName: 'LDAP Hostname',
			name: 'ldapHostname',
			type: 'string',
			default: '',
			description: 'Active Directory LDAP hostname',
			displayOptions,
		},
		{
			displayName: 'LDAP TCP Port',
			name: 'ldapTcpPort',
			type: 'number',
			default: 0,
			description: 'Active Directory LDAP/LDAPS TCP port (636 for LDAPS or 389 for LDAP)',
			displayOptions,
		},
		{
			displayName: 'No SSL',
			name: 'noSsl',
			type: 'boolean',
			default: false,
			description: 'Whether to use unsecure LDAP instead of LDAPS',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Active Directory password',
			displayOptions,
		},
		{
			displayName: 'SSL Thumbprint',
			name: 'sslThumbprint',
			type: 'string',
			default: '',
			description: 'SSL thumbprint of the remote service, e.g. A7:61:68:...:61:91:2F',
			displayOptions,
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'Active Directory user name (pre-Windows 2000 name), e.g. jdoe@example.com',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Federated Active Directory operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/federation/activeDirectory
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.baseDnForGroups = this.getNodeParameter('baseDnForGroups', _itemIndex) as string;
	body.baseDnForUsers = this.getNodeParameter('baseDnForUsers', _itemIndex) as string;
	const description = this.getNodeParameter('description', _itemIndex, '') as string;
	if (description !== '') {
		body.description = description;
	}
	body.domainAlias = this.getNodeParameter('domainAlias', _itemIndex) as string;
	body.domainName = this.getNodeParameter('domainName', _itemIndex) as string;
	body.ip = this.getNodeParameter('ip', _itemIndex) as string;
	const ldapHostname = this.getNodeParameter('ldapHostname', _itemIndex, '') as string;
	if (ldapHostname !== '') {
		body.ldapHostname = ldapHostname;
	}
	const ldapTcpPort = this.getNodeParameter('ldapTcpPort', _itemIndex) as number;
	if (ldapTcpPort) {
		body.ldapTcpPort = ldapTcpPort;
	}
	const noSsl = this.getNodeParameter('noSsl', _itemIndex) as boolean;
	if (noSsl) {
		body.noSsl = noSsl;
	}
	body.password = this.getNodeParameter('password', _itemIndex) as string;
	const sslThumbprint = this.getNodeParameter('sslThumbprint', _itemIndex, '') as string;
	if (sslThumbprint !== '') {
		body.sslThumbprint = sslThumbprint;
	}
	body.username = this.getNodeParameter('username', _itemIndex) as string;
	const data = (await client.httpPost(
		`/dedicatedCloud/${serviceName}/federation/activeDirectory`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
