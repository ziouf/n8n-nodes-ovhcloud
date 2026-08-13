import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'PCC Zone',
			name: 'pccZone',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the PCC zone (location)',
			displayOptions,
		},
		{
			displayName: 'Profile Filter',
			name: 'profileFilter',
			type: 'string',
			default: '',
			description: 'Filter by zpool profile (like)',
			displayOptions,
		},
		{
			displayName: 'Return All',
			name: 'returnAll',
			type: 'boolean',
			default: false,
			description: 'Whether to return all results or only up to a given limit',
			displayOptions,
		},
		{
			displayName: 'Limit',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
			displayOptions: {
				show: {
					returnAll: [false],
				},
			},
		},
	];
}

/**
 * Executes the Get datastores stock operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/location/{pccZone}/stock/zpool
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const pccZone = this.getNodeParameter('pccZone', _itemIndex) as string;
	const profileFilter = this.getNodeParameter('profileFilter', _itemIndex, '') as string;
	const qs: IDataObject = {};
	if (profileFilter !== '') {
		qs.profileFilter = profileFilter;
	}
	const data = (await client.httpGet(
		`/dedicatedCloud/location/${pccZone}/stock/zpool`,
		qs,
	)) as IDataObject;
	const returnAll = this.getNodeParameter('returnAll', _itemIndex) as boolean;

	if (returnAll) {
		return data as unknown as INodeExecutionData[];
	}

	const limit = this.getNodeParameter('limit', _itemIndex) as number;
	return (data as unknown as INodeExecutionData[]).slice(0, limit);
}
