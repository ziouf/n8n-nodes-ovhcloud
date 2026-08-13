import type { IExecuteFunctions, INodeProperties, IDataObject, IDisplayOptions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

 
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

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const commercialRangeName = this.getNodeParameter('commercialRangeName', _itemIndex) as string;
	const data = (await client.httpGet(
		`/dedicatedCloud/commercialRange/${commercialRangeName}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
