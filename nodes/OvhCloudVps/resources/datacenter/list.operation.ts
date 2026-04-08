import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
import { countries } from './countries.json';

export function descriptionDatacenterList(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Country',
			name: 'vpsCountry',
			type: 'options',
			default: 'FR',
			options: countries.map((country) => ({ name: country.name, value: country.code })),
			displayOptions,
		},
	];
}

export async function executeDatacenterList(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const country = this.getNodeParameter('vpsCountry', 0, { extractValue: true }) as string;
	const datacenters = (await client.httpGet(`/vps/datacenter`, { country })) as IDataObject[];
	return datacenters.map((item) => ({ json: item })) as INodeExecutionData[];
}
