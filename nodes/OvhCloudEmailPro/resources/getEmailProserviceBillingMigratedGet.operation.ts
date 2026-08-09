import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';


export function description() {
	return [
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			required: true,
			description: 'The service identifier',
		},
	];
}

/**
 * Detects billing transition status for the service
 *
 * HTTP method: GET
 * Endpoint: /email/pro/{service}/billingMigrated
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;





	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'billingMigrated')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

