import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Xdsl Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The name of the xDSL service (e.g. xdsl-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'xdsl-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Extra IP Range',
			name: 'extraIpRange',
			type: 'string',
			default: '',
			required: true,
			description: 'Extra IPv4 range to move',
			displayOptions,
		},
	];
}

/**
 * Start the process of moving the extra IPv4 address.
 *
 * HTTP method: POST
 * Endpoint: /xdsl/{serviceName}/addressMove/extraIpRangeMove
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const extraIpRange = (this.getNodeParameter('extraIpRange', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (extraIpRange) body.extraIpRange = extraIpRange;

	const data = (await client.httpPost(`/xdsl/${encodeURIComponent(serviceName)}/addressMove/extraIpRangeMove`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
