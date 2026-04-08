import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'SSH Key ID',
			name: 'keyId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the SSH key',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const keyId = this.getNodeParameter('keyId', 0) as string;
	const data = (await client.httpGet(`/me/sshKey/${keyId}`)) as IDataObject;
	return [{ json: data }];
}
