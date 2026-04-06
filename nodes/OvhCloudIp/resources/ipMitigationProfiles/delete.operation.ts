import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete a mitigation profile.
 *
 * Removes a mitigation profile from an IP block.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ipBlock}/mitigationProfiles/{ipMitigationProfile}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Delete Mitigation Profile operation
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
			description: 'The mitigation profile to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Mitigation Profile operation.
 *
 * Removes a mitigation profile from an IP block.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ipBlock}/mitigationProfiles/{ipMitigationProfile}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipMitigationProfile = this.getNodeParameter('ipMitigationProfile', 0) as string;

	await client.httpDelete(`/ip/${ipBlock}/mitigationProfiles/${ipMitigationProfile}`);

	return [{ json: { success: true, ipBlock, ipMitigationProfile } }];
}
