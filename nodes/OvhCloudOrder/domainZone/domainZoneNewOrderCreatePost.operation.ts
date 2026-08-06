import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			default: '',
			required: false,
			description: 'Create only mandatory records',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', itemIndex) as string;
	const minimized = this.getNodeParameter('minimized', itemIndex) as boolean;

	const body = {zoneName: zoneName, minimized: minimized};

	const data = (await client.httpPost('/order/domain/zone/new', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
