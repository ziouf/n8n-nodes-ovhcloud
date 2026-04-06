import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List tasks associated with a Dedicated Horizon service.
 *
 * HTTP method: GET
 * Endpoint: /horizonView/{serviceName}/dedicatedHorizon/task
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the HorizonView service',
			displayOptions,
		},
		{
			displayName: 'State',
			name: 'state',
			type: 'string',
			default: '',
			description: 'Filter tasks by state',
			displayOptions,
		},
	];
}

/**
 * Executes the List Dedicated Horizon Tasks operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const qs: IDataObject = {};
	const state = this.getNodeParameter('state', 0, '') as string;
	if (state) qs.state = state;

	const data = (await client.httpGet(
		`/horizonView/${serviceName}/dedicatedHorizon/task`,
		{ qs },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
