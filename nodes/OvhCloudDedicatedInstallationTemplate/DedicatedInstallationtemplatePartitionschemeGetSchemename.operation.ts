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
 * Endpoint: /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const schemeName = this.getNodeParameter('schemeName', _itemIndex) as string;
	const templateName = this.getNodeParameter('templateName', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/installationTemplate/' + encodeURIComponent(templateName) + '/partitionScheme/' + encodeURIComponent(schemeName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
