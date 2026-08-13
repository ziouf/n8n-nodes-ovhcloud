import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedServerServices',
				displayName: 'Service Name',
				description: 'Update server service infos',
				placeholder: 'server-12345',
			}),
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const renewAutomatic = this.getNodeParameter('renewAutomatic', _itemIndex, '') as string;

	const body: IDataObject = {};
		if (renewAutomatic) {
			body.renewAutomatic = renewAutomatic;
		}

	const data = (await client.httpPut(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/serviceInfos`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
