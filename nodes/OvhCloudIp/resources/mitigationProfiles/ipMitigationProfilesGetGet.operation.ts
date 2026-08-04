import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
	{
		displayName: 'Ip',
		name: 'ip',
		type: 'string',
		default: '',
		required: true,
		description: 'The IP block identifier (e.g. 1.2.3.4/32)',
		displayOptions,
	},
	{
		displayName: 'Ip Mitigation Profile',
		name: 'ipMitigationProfile',
		type: 'string',
		default: '',
		required: true,
		description: 'IP of the mitigation profile',
		displayOptions,
	},
	];
}

/**
 * Executes the Get Mitigation Profile operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/mitigationProfiles/{ipMitigationProfile}
 */

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;

	const ipMitigationProfile = this.getNodeParameter('ipMitigationProfile', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/ip/${encodeURIComponent(ip)}/mitigationProfiles/${encodeURIComponent(ipMitigationProfile)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
