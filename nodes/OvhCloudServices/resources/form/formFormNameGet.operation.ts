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
			displayName: 'Form Name',
			name: 'formName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		}

	];
}

/**
 * Executes the Get Form operation.
 *
 * HTTP method: GET
 * Endpoint: /services/{serviceName}/form/{formName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const formName = this.getNodeParameter('formName', _itemIndex) as string;
	const client = getClient(this);
	const data = (await client.httpGet(`/services/${encodeURIComponent(serviceName)}/form/${encodeURIComponent(formName)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
