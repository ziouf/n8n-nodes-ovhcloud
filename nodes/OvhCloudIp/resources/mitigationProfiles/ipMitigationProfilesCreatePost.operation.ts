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
		required: true,
		description: 'Delay to wait before removing IP from auto mitigation after an attack',
		displayOptions,
	},
	{
		displayName: 'Ip Mitigation Profile',
		name: 'ipMitigationProfile',
		type: 'string',
		default: '',
		required: true,
		description: 'IP for the mitigation profile',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Create Mitigation Profile operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/mitigationProfiles
 */

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;

	const autoMitigationTimeOut = (this.getNodeParameter('autoMitigationTimeOut', itemIndex) as string) || '';
	const ipMitigationProfile = (this.getNodeParameter('ipMitigationProfile', itemIndex) as string) || '';

	const body: IDataObject = {};
	body.autoMitigationTimeOut = autoMitigationTimeOut;
	body.ipMitigationProfile = ipMitigationProfile;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/mitigationProfiles`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
