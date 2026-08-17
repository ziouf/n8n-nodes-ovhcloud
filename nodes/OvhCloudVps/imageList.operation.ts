import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Filter by image status',
			placeholder: 'e.g. available, deprecated',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
		extractValue: true,
	}) as string;
	const status = (this.getNodeParameter('status', _itemIndex) as string) || undefined;
	const qs: IDataObject = {};
	if (status) {
		qs.status = status;
	}
	const data = await client.httpGet(`/vps/${serviceName}/images`, qs);
	return this.helpers.returnJsonArray((data as string[]).map((name) => ({ name })));
}
