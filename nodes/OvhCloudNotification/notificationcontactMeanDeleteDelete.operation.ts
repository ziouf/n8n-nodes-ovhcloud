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
 * Executes the Delete Delete the contact mean operation.
 *
 * HTTP method: DELETE
 * Endpoint: /notification/contactMean/{contactMeanId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const contactMeanId = this.getNodeParameter('contactMeanId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/notification/contactMean/' + contactMeanId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
