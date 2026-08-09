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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID identifier',
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
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'Record subdomain',
			displayOptions,
		},
		{
			displayName: 'Target',
			name: 'target',
			type: 'string',
			default: '',
			description: 'Target of the record',
			displayOptions,
		},
		{
			displayName: 'TTL',
			name: 'ttl',
			type: 'number',
			default: 0,
			description: 'TTL of the record',
			displayOptions,
		},
	];
}

/**
 * Executes the Alter record object properties (Don't forget to refresh the zone) operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/zone/{zoneName}/record/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const id = this.getNodeParameter('id', _itemIndex) as string;
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const body: IDataObject = {};
		const subDomain = this.getNodeParameter('subDomain', _itemIndex, '') as string;
		if (subDomain !== '') body['subDomain'] = subDomain;
		const target = this.getNodeParameter('target', _itemIndex, '') as string;
		if (target !== '') body['target'] = target;
		const ttl = this.getNodeParameter('ttl', _itemIndex, 0) as number;
		if (ttl !== 0) body['ttl'] = ttl;

	const data = (await client.httpPut(`/domain/zone/${encodeURIComponent(zoneName)}/record/${encodeURIComponent(id)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
