import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'contact Mean Id',
			name: 'contactMeanId',
			type: 'string',
			default: '',
			required: true,
			description: 'The contactMeanId identifier',
		},

	];
}

/**
 * Executes the Put Update a contact mean operation.
 *
 * HTTP method: PUT
 * Endpoint: /notification/contactMean/{contactMeanId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const contactMeanId = this.getNodeParameter('contactMeanId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/notification/contactMean/' + contactMeanId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
