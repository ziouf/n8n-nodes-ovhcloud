/**
 * @brief Update Service Info operation for web hosting
 *
 * HTTP PUT request to `/hosting/web/{serviceName}/serviceInfos` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the web hosting service',
			displayOptions,
		},
		{
			displayName: 'Contact Email',
			name: 'contactEmail',
			type: 'string',
			default: '',
			description: 'Contact email for the service',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const contactEmail = this.getNodeParameter('contactEmail', 0, '') as string;

	const body: IDataObject = {};
	if (contactEmail) body.contactEmail = contactEmail;

	const data = (await client.httpPut(`/hosting/web/${serviceName}/serviceInfos`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
