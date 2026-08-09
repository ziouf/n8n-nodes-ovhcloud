import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

 
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: "With Details",
			name: "withDetails",
			type: 'boolean',
			default: false,
			description: 'Whether to return the service details or just the service IDs',
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const withDetails = this.getNodeParameter('withDetails', _itemIndex, false) as boolean;
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/service')) as number[];
	const outputData = ids.map((id) => ({ serviceId: id }));
	if (withDetails) {
		for (const d of outputData) {
			const svcDetails = (await client.httpGet(`/service/${d.serviceId}`)) as import('n8n-workflow').IDataObject;
			Object.assign(d, svcDetails);
		}
	}
	return this.helpers.returnJsonArray(outputData);
}
