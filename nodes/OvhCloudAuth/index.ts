import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Auth operations
import * as credentialPost from './resources/credentialPost.operation';
import * as currentCredentialGet from './resources/currentCredentialGet.operation';
import * as detailsGet from './resources/detailsGet.operation';
import * as logoutPost from './resources/logoutPost.operation';
import * as timeGet from './resources/timeGet.operation';
import * as tokenPost from './resources/tokenPost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'authOperation',
		type: 'options',
		noDataExpression: true,
		default: undefined,
		options: [
			{
				name: 'Get Authentication Details',
				value: 'detailsGet',
				action: 'Get details on the current authentication (identity and permissions)',
			},
			{
				name: 'Get Current Credential',
				value: 'currentCredentialGet',
				action: 'Get details of the current credential',
			},
			{
				name: 'Get Server Time',
				value: 'timeGet',
				action: 'Get the current OVH server time as UNIX timestamp',
			},
			{
				name: 'Logout',
				value: 'logoutPost',
				action: 'Expire the current credential (disconnect)',
			},
			{
				name: 'Request Credential',
				value: 'credentialPost',
				action: 'Request a new credential for your application',
			},
			{
				name: 'Request Token',
				value: 'tokenPost',
				action: 'Generate a unique one-time token (chatbot auth)',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('authOperation', 0) as string;

	switch (operation) {
		case 'credentialPost':
			return credentialPost.execute.call(this);
		case 'currentCredentialGet':
			return currentCredentialGet.execute.call(this);
		case 'detailsGet':
			return detailsGet.execute.call(this);
		case 'logoutPost':
			return logoutPost.execute.call(this);
		case 'timeGet':
			return timeGet.execute.call(this);
		case 'tokenPost':
			return tokenPost.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
