import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DNS zone',
			displayOptions,
		},
		{
			displayName: 'SubDomain',
			name: 'subDomain',
			type: 'string',
			default: '',
			required: true,
			description: 'The subdomain of the DynHost record',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const subDomain = this.getNodeParameter('subDomain', 0) as string;
	const data = (await client.httpGet(
		`/domain/zone/${zoneName}/dynHost/record/${subDomain}`,
	)) as IDataObject;
	return [{ json: data }];
}
