import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Update server service infos',
			displayOptions,
		},
		{
			displayName: 'Renew Automatic',
			name: 'renewAutomatic',
			type: 'string',
			default: '',
			required: true,
			description: 'Update server service infos',
			displayOptions,
		},
	];
}

/**
 * Update server service infos
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/server/{serviceName}/serviceInfos
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const renewAutomatic = this.getNodeParameter('renewAutomatic', itemIndex, '') as string;

	const body: IDataObject = {};
		if (renewAutomatic) {
			body.renewAutomatic = renewAutomatic;
		}

	const data = (await client.httpPut(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/serviceInfos`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
