import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific web hosting attached domain.
 *
 * HTTP method: GET
 * Endpoint: /v2/webhosting/attachedDomain/{attachedDomainId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Attached Domain ID',
			name: 'attachedDomainId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the attached domain',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Web Hosting Attached Domain operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const attachedDomainId = this.getNodeParameter('attachedDomainId', 0) as string;
	const data = (await client.httpGet(`/v2/webhosting/attachedDomain/${attachedDomainId}`)) as IDataObject;
	return [{ json: data }];
}
