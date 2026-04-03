import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Application ID',
			name: 'applicationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the API application',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const applicationId = this.getNodeParameter('applicationId', 0) as string;
	const data = (await client.httpGet(`/me/api/application/${applicationId}`)) as IDataObject;
	return [{ json: data }];
}
