import type { IExecuteFunctions, INodeProperties, IDataObject, IDisplayOptions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Commercial Range Name',
			name: 'commercialRangeName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the commercial range',
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const commercialRangeName = this.getNodeParameter('commercialRangeName', itemIndex) as string;
	const data = (await client.httpGet(
		`/dedicatedCloud/commercialRange/${commercialRangeName}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
