import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [
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
 * Partitioning schemes available on this template
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate/{templateName}/partitionScheme
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const templateName = this.getNodeParameter('templateName', _itemIndex) as string;
	const client = getClient(this);
	const data = (await client.httpGet('/dedicated/installationTemplate/' + encodeURIComponent(templateName) + '/partitionScheme')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
