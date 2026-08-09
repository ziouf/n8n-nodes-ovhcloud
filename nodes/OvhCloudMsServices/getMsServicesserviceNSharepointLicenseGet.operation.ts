import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'License',
			name: 'license',
			type: 'string',
			default: '',
			description: 'The license parameter',
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			type: 'string',
			default: '',
			description: 'The period parameter',
			displayOptions,
		},
	];
}

/**
 * Get active licenses for specific period of time
 *
 * HTTP method: GET
 * Endpoint: /msServices/{serviceName}/sharepoint/license
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const license = this.getNodeParameter('license', _itemIndex) as string;
	const period = this.getNodeParameter('period', _itemIndex) as string;


const qs: IDataObject = {
    license: license,
    period: period
  };



	const client = new ApiClient(this);
	const data = (await client.httpGet('/msServices' + '/' + encodeURIComponent(serviceName) + '/' + 'sharepoint' + '/' + 'license', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

