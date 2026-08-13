import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the zone to create',
			displayOptions,
		},
		{
			displayName: 'Minimized',
			name: 'minimized',
			type: 'boolean',
			default: false,
			description: 'Whether to create only mandatory records',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;
	const minimized = this.getNodeParameter('minimized', _itemIndex) as boolean;

	const qs = {zoneName: zoneName, minimized: minimized};

	const data = (await client.httpGet('/order/domain/zone/new', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
