import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
 * Executes the Delete Delete Mitigation Profile operation.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ip}/mitigationProfiles/{ipMitigationProfile}
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const ipMitigationProfile = this.getNodeParameter('ipMitigationProfile', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpDelete(`/ip/${encodeURIComponent(ip)}/mitigationProfiles/${encodeURIComponent(ipMitigationProfile)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
