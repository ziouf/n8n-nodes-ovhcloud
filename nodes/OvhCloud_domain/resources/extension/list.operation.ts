import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief List Extensions operation
 *
 * Lists available domain extensions.
 *
 * HTTP method: GET
 * Endpoint: /domain/extensions
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Geolocalizations',
			name: 'geolocalizations',
			type: 'string',
			default: '',
			description: 'Filter by geolocalizations',
			displayOptions,
		},
		{
			displayName: 'Order By',
			name: 'orderBy',
			type: 'string',
			default: '',
			description: 'Order results by field',
			displayOptions,
		},
		{
			displayName: 'OVH Subsidiary',
			name: 'ovhSubsidiary',
			type: 'string',
			default: '',
			description: 'Filter by OVH subsidiary',
			displayOptions,
		},
		{
			displayName: 'Thematics',
			name: 'thematics',
			type: 'string',
			default: '',
			description: 'Filter by thematics',
			displayOptions,
		},
	];
}

/**
 * Executes the List Extensions operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const qs: IDataObject = {};
	const geolocalizations = this.getNodeParameter('geolocalizations', 0, '') as string;
	const orderBy = this.getNodeParameter('orderBy', 0, '') as string;
	const ovhSubsidiary = this.getNodeParameter('ovhSubsidiary', 0, '') as string;
	const thematics = this.getNodeParameter('thematics', 0, '') as string;

	if (geolocalizations) qs.geolocalizations = geolocalizations;
	if (orderBy) qs.orderBy = orderBy;
	if (ovhSubsidiary) qs.ovhSubsidiary = ovhSubsidiary;
	if (thematics) qs.thematics = thematics;

	const data = (await client.httpGet('/domain/extensions', qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
