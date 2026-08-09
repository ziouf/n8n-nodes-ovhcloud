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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name identifier',
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
	];
}

/**
 * Executes the Get this object properties operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone/{zoneName}/option/{name}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const name = this.getNodeParameter('name', _itemIndex) as string;
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const data = (await client.httpGet(`/domain/zone/${encodeURIComponent(zoneName)}/option/${encodeURIComponent(name)}/serviceInfos`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
