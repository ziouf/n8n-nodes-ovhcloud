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
			description: 'Filter the value of subDomain property',
			displayOptions,
		},
	];
}

/**
 * Executes the List redirections operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone/{zoneName}/redirection
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const zoneName = this.getNodeParameter('zoneName', itemIndex) as string;

	const qs: IDataObject = {};
		const subDomain = this.getNodeParameter('subDomain', itemIndex, '') as string;
		if (subDomain !== '' && subDomain !== undefined) qs['subDomain'] = subDomain;

	const data = (await client.httpGet(`/domain/zone/${encodeURIComponent(zoneName)}/redirection`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
