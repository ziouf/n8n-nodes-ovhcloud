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
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'Filter the value of subDomain property (ilike)',
			displayOptions,
		},
	];
}

/**
 * Executes the List record operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone/{zoneName}/dynHost/record
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const qs: IDataObject = {};
		const subDomain = this.getNodeParameter('subDomain', _itemIndex, '') as string;
		if (subDomain !== '' && subDomain !== undefined) qs['subDomain'] = subDomain;

	const data = (await client.httpGet(`/domain/zone/${encodeURIComponent(zoneName)}/dynHost/record`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
