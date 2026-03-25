import { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(): INodeProperties[] {
	return [];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceID = this.getNodeParameter('svcID', 0, { extractValue: true }) as {
		name: string;
		value: string;
	};
	const data = (await client.httpGet(`/services/${serviceID.value}/upgrade`)) as IDataObject;
	return [{ json: data }];
}
