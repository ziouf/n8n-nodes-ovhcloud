import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The zoneName identifier',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			description: 'Record IP',
			displayOptions,
		},
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'Record sub-domain',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a new record operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/dynHost/record
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const body: IDataObject = {};
		const ip = this.getNodeParameter('ip', _itemIndex, '') as string;
		if (ip !== '') body['ip'] = ip;
		const subDomain = this.getNodeParameter('subDomain', _itemIndex, '') as string;
		if (subDomain !== '') body['subDomain'] = subDomain;

	const data = (await client.httpPost(`/domain/zone/${encodeURIComponent(zoneName)}/dynHost/record`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
