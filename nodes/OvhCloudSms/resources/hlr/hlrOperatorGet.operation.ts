import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'HLR ID',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your SMS offer',
			displayOptions,
		}
	];
}

/**
 * Executes the Get /sms/{serviceName}/hlr/{id}/operator operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/hlr/{id}/operator
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', 0) as number;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await new ApiClient(this).httpGet(`/sms/${encodeURIComponent(serviceName)}/hlr/${id}/operator`)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
