import type { IExecuteFunctions, INodeProperties, IDataObject, IDisplayOptions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

 
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
			displayName: 'Short Name',
			name: 'shortName',
			type: 'string',
			default: '',
			required: true,
			description: 'Short name of the hypervisor',
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const pccZone = this.getNodeParameter('pccZone', _itemIndex) as string;
	const shortName = this.getNodeParameter('shortName', _itemIndex) as string;
	const data = (await client.httpGet(
		`/dedicatedCloud/location/${pccZone}/hypervisor/${shortName}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
