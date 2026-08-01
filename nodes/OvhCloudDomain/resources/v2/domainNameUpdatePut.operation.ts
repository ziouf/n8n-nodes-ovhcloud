import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The domainName identifier',
		},

	];
}

/**
 * Executes the Put Update an existing domain name by modifying various configurations through the targetSpec operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/name/{domainName}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const domainName = this.getNodeParameter('domainName', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/domain/name/' + domainName, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
