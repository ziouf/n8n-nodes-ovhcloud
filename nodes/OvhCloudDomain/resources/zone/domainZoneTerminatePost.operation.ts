import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice(
			'This will permanently terminate the DNS zone. This action is irreversible.',
			displayOptions,
		),
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The zoneName identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Ask for the termination of your service operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/terminate
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const data = (await client.httpPost(
		`/domain/zone/${encodeURIComponent(zoneName)}/terminate`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
