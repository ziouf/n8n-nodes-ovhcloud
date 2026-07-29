import type { IExecuteFunctions, INodeProperties, IDataObject, IDisplayOptions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'PCC Zone',
			name: 'pccZone',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the PCC zone (location)',
		},
		{
			displayName: 'Min Year',
			name: 'minYear',
			type: 'number',
			default: 0,
			description: 'Minimum reference year',
		},
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

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const pccZone = this.getNodeParameter('pccZone', itemIndex) as string;
	const minYear = this.getNodeParameter('minYear', itemIndex) as number;
	const returnAll = this.getNodeParameter('returnAll', itemIndex) as boolean;

	const body: IDataObject = {};
	if (minYear) body.minYear = minYear;

	const data = (await client.httpGet(
		`/dedicatedCloud/location/${pccZone}/stock/host`,
		body,
	)) as INodeExecutionData[];

	if (returnAll) {
		return data;
	}

	const limit = this.getNodeParameter('limit', itemIndex) as number;
	return data.slice(0, limit);
}
