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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
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
 * Executes the Alter record object properties operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/zone/{zoneName}/dynHost/record/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const id = this.getNodeParameter('id', _itemIndex) as string;
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const body: IDataObject = {};
		const ip = this.getNodeParameter('ip', _itemIndex, '') as string;
		if (ip !== '') body['ip'] = ip;
		const subDomain = this.getNodeParameter('subDomain', _itemIndex, '') as string;
		if (subDomain !== '') body['subDomain'] = subDomain;

	const data = (await client.httpPut(`/domain/zone/${encodeURIComponent(zoneName)}/dynHost/record/${encodeURIComponent(id)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
