import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Code',
			name: 'code',
			type: 'string',
			default: '',
			required: true,
			description: 'The credit code to apply',
			displayOptions,
		},
	];
}

/**
 * Executes the Add Credit operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/credit
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const code = this.getNodeParameter('code', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		code,
	};

	await client.httpPost(`/cloud/project/${serviceName}/credit`, body);

	return this.helpers.returnJsonArray([{ success: true }]);
}
