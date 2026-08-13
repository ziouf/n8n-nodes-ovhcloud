import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The domainName identifier',
			displayOptions,
		},
		{
			displayName: 'Target Spec',
			name: 'targetSpec',
			type: 'json',
			default: '',
			required: true,
			description: 'Target configuration spec to apply to the domain name',
			displayOptions,
		},
	];
}

/**
 * Executes the Update an existing domain name operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/name/{domainName}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const domainName = this.getNodeParameter('domainName', _itemIndex) as string;

	const body: IDataObject = {};
	const targetSpec = this.getNodeParameter('targetSpec', _itemIndex, '') as string;
	body['targetSpec'] = JSON.parse(targetSpec);

	const data = (await client.httpPut(
		`/domain/name/${encodeURIComponent(domainName)}`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
