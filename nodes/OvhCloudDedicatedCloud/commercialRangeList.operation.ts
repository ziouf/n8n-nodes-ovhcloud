import type { IExecuteFunctions, INodeProperties, IDisplayOptions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

 
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Return All',
			name: 'returnAll',
			type: 'boolean',
			default: false,
			description: 'Whether to return all results or only up to a given limit',
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

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const returnAll = this.getNodeParameter('returnAll', _itemIndex) as boolean;
	const body = {};

	const data = (await client.httpGet('/dedicatedCloud/commercialRange', body)) as INodeExecutionData[];

	if (returnAll) {
		return data;
	}

	const limit = this.getNodeParameter('limit', _itemIndex) as number;
	return data.slice(0, limit);
}
