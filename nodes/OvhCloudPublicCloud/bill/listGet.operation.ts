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
			displayName: 'From',
			name: 'from',
			type: 'string',
			default: '',
			required: true,
			description: 'Start date for the bill filter (ISO 8601 format)',
			displayOptions,
		},
		{
			displayName: 'To',
			name: 'to',
			type: 'string',
			default: '',
			required: true,
			description: 'End date for the bill filter (ISO 8601 format)',
			displayOptions,
		},
	];
}

/**
 * Executes the List Bills operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/bill
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const from = this.getNodeParameter('from', _itemIndex ?? 0) as string;
	const to = this.getNodeParameter('to', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
		from,
		to,
	};

	const data = (await client.httpGet(`/cloud/project/${serviceName}/bill`, qs)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
