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
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the domain',
			displayOptions,
		},
		{
			displayName: 'Hosting ID',
			name: 'hostingId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the hosting',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const hostingId = this.getNodeParameter('hostingId', 0) as string;
	const data = (await client.httpGet(`/domain/${domainName}/hosting/${hostingId}`)) as IDataObject;
	return [{ json: data }];
}
