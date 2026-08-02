import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Building',
			name: 'building',
			type: 'string',
			default: '',
			required: true,
			description: 'Identifier of the building',
			displayOptions,
		},
	];
}

/**
 * Run an eligibility test by building, reserved for partners.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/test/building/partners
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const building = (this.getNodeParameter('building', 0, '') as string) || '';

	const body: IDataObject = {};
	if (building) body.building = building;

	const data = (await client.httpPost(`/connectivity/eligibility/test/building/partners`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
