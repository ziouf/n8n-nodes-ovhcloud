/**
 * @brief Update Service Info operation for private database hosting
 *
 * Updates service information for a specific private database hosting service.
 *
 * HTTP method: PUT
 * Endpoint: /hosting/privateDatabase/{serviceName}/serviceInfos
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the private database hosting service',
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

	const data = (await client.httpPut(`/hosting/privateDatabase/${serviceName}/serviceInfos`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
