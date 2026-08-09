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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your CDN offer',
			displayOptions,
		},
		{
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			required: true,
			description: 'Log kind name',
			displayOptions,
		},
	];
}

/**
 * Executes the Post GenerateLogUrl operation.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/log/url
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const kind = this.getNodeParameter('kind', _itemIndex) as string;

	const body: IDataObject = {};
	body.kind = kind;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/cdn/dedicated/${encodeURIComponent(serviceName)}/log/url`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
