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
	{
		displayName: 'Auto Mitigation Time Out',
		name: 'autoMitigationTimeOut',
		type: 'options',
		options: [
			{ name: '0 Minutes', value: '0' },
			{ name: '15 Minutes', value: '15' },
			{ name: '60 Minutes', value: '60' },
			{ name: '360 Minutes', value: '360' },
			{ name: '1560 Minutes', value: '1560' },
		],
		default: '60',
		description: 'Delay to wait before removing IP from auto mitigation after an attack',
		displayOptions,
	},
	];
}

/**
 * Executes the Put Update Mitigation Profile operation.
 *
 * HTTP method: PUT
 * Endpoint: /ip/{ip}/mitigationProfiles/{ipMitigationProfile}
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const ipMitigationProfile = this.getNodeParameter('ipMitigationProfile', _itemIndex) as string;

	const autoMitigationTimeOut = (this.getNodeParameter('autoMitigationTimeOut', _itemIndex) as string) || '';

	const body: IDataObject = {};
	if (autoMitigationTimeOut) body.autoMitigationTimeOut = autoMitigationTimeOut;

	const client = getClient(this);
	const data = (await client.httpPut(`/ip/${encodeURIComponent(ip)}/mitigationProfiles/${encodeURIComponent(ipMitigationProfile)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
