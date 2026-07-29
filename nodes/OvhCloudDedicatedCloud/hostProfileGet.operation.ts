import type { IExecuteFunctions, INodeProperties, IDataObject, IDisplayOptions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'PCC Zone',
			name: 'pccZone',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the PCC zone (location)',
		},
		{
			displayName: 'Host Profile ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the host profile',
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const pccZone = this.getNodeParameter('pccZone', itemIndex) as string;
	const id = this.getNodeParameter('id', itemIndex) as number;
	const data = (await client.httpGet(
		`/dedicatedCloud/location/${pccZone}/hostProfile/${id}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
