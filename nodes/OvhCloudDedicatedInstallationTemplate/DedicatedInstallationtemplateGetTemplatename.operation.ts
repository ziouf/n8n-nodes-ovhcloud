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
 * Endpoint: /dedicated/installationTemplate/{templateName}
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const templateName = this.getNodeParameter('templateName', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/installationTemplate/' + encodeURIComponent(templateName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
