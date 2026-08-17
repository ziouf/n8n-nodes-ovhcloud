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
			displayName: 'Distribution ID',
			name: 'distId',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'e.g. stretch-64-buster',
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
	const distId = this.getNodeParameter('distId', _itemIndex) as string;
	const data = (await client.httpGet(`/vps/${serviceName}/distribution/${distId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
