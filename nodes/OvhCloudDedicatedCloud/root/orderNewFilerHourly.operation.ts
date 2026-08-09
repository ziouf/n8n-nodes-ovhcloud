import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
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
			description: 'Domain of the service',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Filer profile you want to order',
			displayOptions,
		},
	];
}

/**
 * Executes the Order Hourly Global Datastore operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/orderNewFilerHourly
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.name = this.getNodeParameter('name', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/orderNewFilerHourly`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
