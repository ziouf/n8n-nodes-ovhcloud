import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Xdsl Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The name of the xDSL service (e.g. xdsl-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'xdsl-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Line Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			description: 'Number of the line',
			displayOptions,
		},
		{
			displayName: 'Profile ID',
			name: 'profileId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the profile to apply',
			displayOptions,
		},
	];
}

/**
 * Change the profile of a specific DSLAM port.
 *
 * HTTP method: POST
 * Endpoint: /xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const number = this.getNodeParameter('number', _itemIndex ?? 0) as string;
	const profileId = (this.getNodeParameter('profileId', _itemIndex ?? 0, 0) as number) ?? 0;

	const body: IDataObject = {};
	if (profileId) body.profileId = profileId;

	const data = (await client.httpPost(`/xdsl/${encodeURIComponent(serviceName)}/lines/${encodeURIComponent(number)}/dslamPort/changeProfile`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
