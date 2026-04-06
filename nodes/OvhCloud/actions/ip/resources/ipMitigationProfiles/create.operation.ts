import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a new mitigation profile.
 *
 * Creates a new mitigation profile for an IP.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/mitigationProfiles
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Create Mitigation Profile operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block identifier',
			displayOptions,
		},
		{
			displayName: 'Profile Fields',
			name: 'profileFields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			required: true,
			displayOptions,
			options: [
				{
					displayName: 'IP Mitigation Profile',
					name: 'ipMitigationProfile',
					type: 'string',
					default: '',
					description: 'The mitigation profile name',
				},
				{
					displayName: 'Auto Mitigation Timeout',
					name: 'autoMitigationTimeOut',
					type: 'number',
					default: 0,
					description: 'Auto mitigation timeout in seconds',
				},
			],
		},
	];
}

/**
 * Executes the Create Mitigation Profile operation.
 *
 * Creates a new mitigation profile for an IP.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/mitigationProfiles
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const profileFields = this.getNodeParameter('profileFields', 0) as IDataObject;
	const data = (await client.httpPost(`/ip/${ipBlock}/mitigationProfiles`, {
		body: profileFields,
	})) as IDataObject;
	return [{ json: data }];
}
