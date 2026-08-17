import { SERVICE_NAME } from './serviceName';
import type { IExecuteFunctions, INodeExecutionData, IDisplayOptions } from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			...SERVICE_NAME,
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
	const migrationId = this.getNodeParameter('migrationId', _itemIndex) as string;
	const step = this.getNodeParameter('step', _itemIndex) as string;
	const data = await client.httpGet(
		`/vps/${serviceName}/migrations/2020/migration/${migrationId}/${step}`,
	);
	return this.helpers.returnJsonArray([data as INodeExecutionData]);
}
