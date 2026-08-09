import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Website Name',
			name: 'websiteName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the website',
			displayOptions,
		},
		{
			displayName: 'Deployment ID',
			name: 'deploymentId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the deployment',
			displayOptions,
		},
	];
}

/**
 * Get the logs of a website deployment
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/website/{serviceName}/{websiteName}/deployment/{deploymentId}/logs
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const websiteName = this.getNodeParameter('websiteName', _itemIndex as number) as string;
	const deploymentId = this.getNodeParameter('deploymentId', _itemIndex as number) as string;
	const data = (await client.httpGet(
		`/hosting/web/website/${encodeURIComponent(serviceName)}/${encodeURIComponent(websiteName)}/deployment/${encodeURIComponent(deploymentId)}/logs`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
