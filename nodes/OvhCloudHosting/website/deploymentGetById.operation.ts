import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
 * Get a website deployment by id
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/website/{serviceName}/{websiteName}/deployment/{deploymentId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const websiteName = this.getNodeParameter('websiteName', _itemIndex ?? 0) as string;
	const deploymentId = this.getNodeParameter('deploymentId', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(
		`/hosting/web/website/${encodeURIComponent(serviceName)}/${encodeURIComponent(websiteName)}/deployment/${encodeURIComponent(deploymentId)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
