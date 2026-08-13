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
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		}

	];
}

/**
 * Executes the Get DetachOffer operation.
 *
 * HTTP method: GET
 * Endpoint: /services/{serviceName}/detach/{planCode}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const planCode = this.getNodeParameter('planCode', _itemIndex) as string;
	const client = getClient(this);
	const data = (await client.httpGet(`/services/${encodeURIComponent(serviceName)}/detach/${encodeURIComponent(planCode)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
