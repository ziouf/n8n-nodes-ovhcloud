import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get details of a mitigation profile.
 *
 * Retrieves information about a specific mitigation profile.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/mitigationProfiles/{ipMitigationProfile}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Mitigation Profile operation
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
	];
}

/**
 * Executes the Get Mitigation Profile operation.
 *
 * Retrieves details of a specific mitigation profile.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/mitigationProfiles/{ipMitigationProfile}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing mitigation profile details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipMitigationProfile = this.getNodeParameter('ipMitigationProfile', 0) as string;
	const data = (await client.httpGet(
		`/ip/${ipBlock}/mitigationProfiles/${ipMitigationProfile}`,
	)) as IDataObject;
	return [{ json: data }];
}
