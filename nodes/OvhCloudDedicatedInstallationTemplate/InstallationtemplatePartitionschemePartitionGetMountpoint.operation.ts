import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [
		{
			displayName: 'Mountpoint',
			name: 'mountpoint',
			type: 'string',
			default: '',
			required: true,
			description: 'Partition mount point',
		},
		{
			displayName: 'Schemename',
			name: 'schemeName',
			type: 'string',
			default: '',
			required: true,
			description: 'This partitioning scheme name',
		},
		{
			displayName: 'Templatename',
			name: 'templateName',
			type: 'string',
			default: '',
			required: true,
			description: 'This template name',
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const mountpoint = this.getNodeParameter('mountpoint', itemIndex) as string;
	const schemeName = this.getNodeParameter('schemeName', itemIndex) as string;
	const templateName = this.getNodeParameter('templateName', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/installationTemplate/' + encodeURIComponent(templateName) + '/partitionScheme/' + encodeURIComponent(schemeName) + '/partition/' + encodeURIComponent(mountpoint))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
