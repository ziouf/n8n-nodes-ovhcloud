import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create attestation for parent tenant of an Office Prepaid license.
 *
 * HTTP method: POST
 * Endpoint: /license/officePrepaid/{serviceName}/parentTenant/createAttestation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Office Prepaid license service',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Attestation operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPost(
		`/license/officePrepaid/${serviceName}/parentTenant/createAttestation`,
	)) as IDataObject;
	return [{ json: data }];
}
