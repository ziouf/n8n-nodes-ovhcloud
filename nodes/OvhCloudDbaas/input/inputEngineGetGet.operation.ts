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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Engine ID',
			name: 'engineId',
			type: 'string',
			default: '',
			required: true,
			description: 'The engineId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the GET inputEngineGetGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/input/engine/{engineId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const engineId = this.getNodeParameter('engineId', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/input/engine/${encodeURIComponent(engineId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
