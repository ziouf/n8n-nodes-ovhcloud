import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: '',
			required: true,
			description: 'The country parameter',
			displayOptions,
		},
		{
			displayName: 'Range',
			name: 'range',
			type: 'string',
			default: '',
			description: 'The range (special number) parameter',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description: 'The type parameter',
			displayOptions,
		},
		{
			displayName: 'Zone',
			name: 'zone',
			type: 'string',
			default: '',
			description: 'The zone parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Number Specific Numbers List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/number/specificNumbers
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const country = this.getNodeParameter('country', _itemIndex) as string;
	const range = this.getNodeParameter('range', _itemIndex) as string;
	const type = this.getNodeParameter('type', _itemIndex) as string;
	const zone = this.getNodeParameter('zone', _itemIndex) as string;

	const qs: IDataObject = {
		country: country,
		range: range,
		type: type,
		zone: zone,
	};

	const client = getClient(this);
	const data = (await client.httpGet('/telephony/number/specificNumbers', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
