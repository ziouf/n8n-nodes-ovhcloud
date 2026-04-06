import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update a mitigation profile.
 *
 * Alters the properties of a mitigation profile.
 *
 * HTTP method: PUT
 * Endpoint: /ip/{ipBlock}/mitigationProfiles/{ipMitigationProfile}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Update Mitigation Profile operation
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
			displayName: 'IP Mitigation Profile',
			name: 'ipMitigationProfile',
			type: 'string',
			default: '',
			required: true,
			description: 'The mitigation profile identifier',
			displayOptions,
		},
		{
			displayName: 'Update Fields',
			name: 'updateFields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			displayOptions,
			options: [
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
 * Executes the Update Mitigation Profile operation.
 *
 * Alters the properties of a mitigation profile.
 *
 * HTTP method: PUT
 * Endpoint: /ip/{ipBlock}/mitigationProfiles/{ipMitigationProfile}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipMitigationProfile = this.getNodeParameter('ipMitigationProfile', 0) as string;
	const updateFields = this.getNodeParameter('updateFields', 0) as IDataObject;

	await client.httpPut(`/ip/${ipBlock}/mitigationProfiles/${ipMitigationProfile}`, {
		body: updateFields,
	});

	return [{ json: { success: true, ipBlock, ipMitigationProfile } }];
}
