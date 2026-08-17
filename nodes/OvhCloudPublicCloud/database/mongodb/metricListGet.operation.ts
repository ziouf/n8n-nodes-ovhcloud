import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Extended',
			name: 'extended',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}
/**
 * Executes the List MongoDB Metrics operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}/metric
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const extended = this.getNodeParameter('extended', _itemIndex ?? 0, '') as string;

	const qs: IDataObject = {
    extended: extended || undefined
  };
	const client = getClient(this);
	const data = (await client.httpGet(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/metric`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
