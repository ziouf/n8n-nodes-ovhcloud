import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
 * Executes the Get ConsumptionElements operation.
 *
 * HTTP method: GET
 * Endpoint: /services/{serviceName}/consumption/element
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const planFamily = (this.getNodeParameter('planFamily', _itemIndex, '') as string) || '';
	const uniqueId = (this.getNodeParameter('uniqueId', _itemIndex, '') as string) || '';
	const qs: IDataObject = {};
	if (planFamily) qs.planFamily = planFamily;
	if (uniqueId) qs.uniqueId = uniqueId;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/services/${encodeURIComponent(serviceName)}/consumption/element`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
