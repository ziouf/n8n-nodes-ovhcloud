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
		{
			displayName: 'Force Provider',
			name: 'forceProvider',
			type: 'string',
			default: '',
			description: 'Force the use of a deposit from a specific provider',
			displayOptions,
		},
	];
}

/**
 * Get the detailed information about a specific building.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/buildingDetails
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const building = (this.getNodeParameter('building', _itemIndex ?? 0, '') as string) || '';
	const forceProvider = (this.getNodeParameter('forceProvider', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (building) body.building = building;
	if (forceProvider) body.forceProvider = forceProvider;

	const data = (await client.httpPost(`/connectivity/eligibility/search/buildingDetails`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
