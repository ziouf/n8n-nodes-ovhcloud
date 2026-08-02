import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Template ID',
			name: 'templateId',
			type: 'string',
			default: '',
			required: true,
			description: 'The installation template identifier',
			placeholder: 'e.g. ubuntu-jammy',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Installation Template operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate/{templateId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const templateId = (this.getNodeParameter('templateId', 0) as string) || '';
	const data = (await client.httpGet(
		`/dedicated/installationTemplate/${templateId}`,
	)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
