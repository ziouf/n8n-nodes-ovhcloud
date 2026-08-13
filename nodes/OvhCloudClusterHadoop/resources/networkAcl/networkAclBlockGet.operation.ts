import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Cluster Hadoop Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your Hadoop cluster',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getClusterHadoopServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'cluster-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'IP Block',
			name: 'block',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'e.g. 123.45.678.0/24',
			description: 'IP block of the ACL',
			displayOptions,
		},
	];
}

/**
 * Get the properties of a network ACL of a Hadoop cluster.
 *
 * HTTP method: GET
 * Endpoint: /cluster/hadoop/{serviceName}/networkAcl/{block}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const block = this.getNodeParameter('block', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(
		`/cluster/hadoop/${encodeURIComponent(serviceName)}/networkAcl/${encodeURIComponent(block)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
