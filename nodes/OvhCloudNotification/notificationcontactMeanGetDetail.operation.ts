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
			displayName: 'Contact Mean ID',
			name: 'contactMeanId',
			type: 'string',
			default: '',
			required: true,
			description: 'The contactMeanId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Retrieve information about a contact mean operation.
 *
 * HTTP method: GET
 * Endpoint: /notification/contactMean/{contactMeanId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const contactMeanId = this.getNodeParameter('contactMeanId', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/notification/contactMean/' + contactMeanId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
