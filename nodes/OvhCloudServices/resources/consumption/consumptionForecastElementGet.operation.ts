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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Plan Family',
			name: 'planFamily',
			type: 'string',
			default: '',
			description: 'Filter elements on a commercial offer\'s family',
			displayOptions,
		},
		{
			displayName: 'Unique ID',
			name: 'uniqueId',
			type: 'string',
			default: '',
			description: 'Filter elements on a given uniqueId',
			displayOptions,
		}

	];
}

/**
 * Executes the Get ForecastConsumptionElements operation.
 *
 * HTTP method: GET
 * Endpoint: /services/{serviceName}/consumption/forecast/element
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const planFamily = (this.getNodeParameter('planFamily', _itemIndex, '') as string) || '';
	const uniqueId = (this.getNodeParameter('uniqueId', _itemIndex, '') as string) || '';
	const qs: IDataObject = {};
	if (planFamily) qs.planFamily = planFamily;
	if (uniqueId) qs.uniqueId = uniqueId;
	const client = getClient(this);
	const data = (await client.httpGet(`/services/${encodeURIComponent(serviceName)}/consumption/forecast/element`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
