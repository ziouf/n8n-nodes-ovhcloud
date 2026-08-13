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
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The zoneName identifier',
			displayOptions,
		},
		{
			displayName: 'Creation Datefrom',
			name: 'creationDatefrom',
			type: 'string',
			default: '',
			description: 'Filter using the value of creationDate property (>=)',
			displayOptions,
		},
		{
			displayName: 'Creation Dateto',
			name: 'creationDateto',
			type: 'string',
			default: '',
			description: 'Filter using the value of creationDate property (<=)',
			displayOptions,
		},
	];
}

/**
 * Executes the List zone histories operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone/{zoneName}/history
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const qs: IDataObject = {};
		const creationDatefrom = this.getNodeParameter('creationDatefrom', _itemIndex, '') as string;
		if (creationDatefrom !== '' && creationDatefrom !== undefined) qs['creationDate.from'] = creationDatefrom;
		const creationDateto = this.getNodeParameter('creationDateto', _itemIndex, '') as string;
		if (creationDateto !== '' && creationDateto !== undefined) qs['creationDate.to'] = creationDateto;

	const data = (await client.httpGet(`/domain/zone/${encodeURIComponent(zoneName)}/history`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
