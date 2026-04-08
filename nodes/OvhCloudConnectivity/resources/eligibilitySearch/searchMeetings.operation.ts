import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Search meeting time slots.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/meetings
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Eligibility Reference',
			name: 'eligibilityReference',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Building',
			name: 'building',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Line Number',
			name: 'lineNumber',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			options: [
				{
					name: 'Active',
					value: 'active',
				},
				{
					name: 'Inactive',
					value: 'inactive',
				},
			],
			default: 'active',
			displayOptions,
		},
		{
			displayName: 'Street Code',
			name: 'streetCode',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Street Number',
			name: 'streetNumber',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Street Alt Code',
			name: 'streetAltCode',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Hexacle',
			name: 'hexacle',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Owner Name',
			name: 'ownerName',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Building',
			name: 'building',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Line Number',
			name: 'lineNumber',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			options: [
				{
					name: 'Active',
					value: 'active',
				},
				{
					name: 'Inactive',
					value: 'inactive',
				},
			],
			default: 'active',
			displayOptions,
		},
		{
			displayName: 'Street Code',
			name: 'streetCode',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Street Number',
			name: 'streetNumber',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Street Alt Code',
			name: 'streetAltCode',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Hexacle',
			name: 'hexacle',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Owner Name',
			name: 'ownerName',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Search Meetings operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		eligibilityReference: this.getNodeParameter('eligibilityReference', 0) as string,
	};
	const building = this.getNodeParameter('building', 0, '') as string;
	const lineNumber = this.getNodeParameter('lineNumber', 0, '') as string;
	const status = this.getNodeParameter('status', 0, '') as string;
	const streetCode = this.getNodeParameter('streetCode', 0, '') as string;
	const streetNumber = this.getNodeParameter('streetNumber', 0, '') as string;
	const streetAltCode = this.getNodeParameter('streetAltCode', 0, '') as string;
	const hexacle = this.getNodeParameter('hexacle', 0, '') as string;
	const ownerName = this.getNodeParameter('ownerName', 0, '') as string;
	if (building) body.building = building;
	if (lineNumber) body.lineNumber = lineNumber;
	if (status) body.status = status;
	if (streetCode) body.streetCode = streetCode;
	if (streetNumber) body.streetNumber = streetNumber;
	if (streetAltCode) body.streetAltCode = streetAltCode;
	if (hexacle) body.hexacle = hexacle;
	if (ownerName) body.ownerName = ownerName;
	const data = (await client.httpPost('/connectivity/eligibility/search/meetings', {
		body,
	})) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
