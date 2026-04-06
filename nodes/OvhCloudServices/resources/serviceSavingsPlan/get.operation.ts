import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service ID',
			name: 'serviceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the service',
			displayOptions,
		},
		{
			displayName: 'Plan ID',
			name: 'planId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the savings plan',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceId = this.getNodeParameter('serviceId', 0) as string;
	const planId = this.getNodeParameter('planId', 0) as string;
	const data = (await client.httpGet(
		`/services/${serviceId}/savingsPlans/${planId}`,
	)) as IDataObject;
	return [{ json: data }];
}
