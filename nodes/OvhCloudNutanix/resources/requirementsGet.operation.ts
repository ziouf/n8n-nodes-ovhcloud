import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Erasure Coding',
			name: 'erasureCoding',
			type: 'boolean',
			default: true,
			required: true,
			description: 'Whether erasure coding is activated',
			displayOptions,
		},
		{
			displayName: 'Rack Awareness',
			name: 'rackAwareness',
			type: 'boolean',
			default: true,
			required: true,
			description: 'Whether rack awareness is activated',
			displayOptions,
		},
		{
			displayName: 'Redundancy Factor',
			name: 'redundancyFactor',
			type: 'number',
			default: 2,
			required: true,
			description: 'Filter on redundancy factor (2 or 3)',
			displayOptions,
		},
	];
}

/**
 * Fetch the requirements for a given cluster configuration.
 *
 * HTTP method: GET
 * Endpoint: /nutanix/requirements
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const erasureCoding = this.getNodeParameter('erasureCoding', _itemIndex ?? 0, true) as boolean;
	const rackAwareness = this.getNodeParameter('rackAwareness', _itemIndex ?? 0, true) as boolean;
	const redundancyFactor = this.getNodeParameter('redundancyFactor', _itemIndex ?? 0) as number;

	const qs: IDataObject = {};
	if (erasureCoding !== undefined) qs.erasureCoding = erasureCoding;
	if (rackAwareness !== undefined) qs.rackAwareness = rackAwareness;
	if (redundancyFactor !== undefined) qs.redundancyFactor = redundancyFactor;
	const data = (await client.httpGet('/nutanix/requirements', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
