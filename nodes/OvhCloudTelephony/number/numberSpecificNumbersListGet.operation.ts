import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const country = this.getNodeParameter('country', itemIndex) as string;
	const range = this.getNodeParameter('range', itemIndex) as string;
	const type = this.getNodeParameter('type', itemIndex) as string;
	const zone = this.getNodeParameter('zone', itemIndex) as string;

	const qs: IDataObject = {
		country: country,
		range: range,
		type: type,
		zone: zone,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/number/specificNumbers', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
